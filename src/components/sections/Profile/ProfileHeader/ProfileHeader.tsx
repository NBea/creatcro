import { useState } from "react";
import type { User } from "../../../../data/users";
import "./ProfileHeader.scss";
import { posts } from "../../../../data/posts";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../../../utils/auth";

type Props = {
  user: User;
  isOwnProfile: boolean;
};

export default function ProfileHeader({
  user,
  isOwnProfile,
}: Props) {
  const navigate = useNavigate();

  const userPosts = posts.filter(
    (p) => p.author === user.username
  );

  const [editMode, setEditMode] = useState(false);
  const [avatar, setAvatar] = useState(user.avatar || "");
  const [about, setAbout] = useState(user.about || "");

  const handleSave = () => {
    const updated = {
      ...user,
      avatar,
      about,
    };

    updateUser(updated);
    setEditMode(false);
  };

  return (
    <div className="profileHeader">
      <div className="division">
        <img src={avatar || "https://placehold.co/150"} />

        <div className="centerHeader">
          <h1>{user.username}</h1>
          <h2>User ID: {user.id}</h2>
          <p>Number of posts: {userPosts.length}</p>

          {!editMode ? (
            <>
              <p>About: {user.about}</p>

              {isOwnProfile && (
                <button
                  className="logout"
                  onClick={() => setEditMode(true)}
                >
                  Edit profile
                </button>
              )}
            </>
          ) : (
            <>
              <input
                value={avatar}
                onChange={(e) => setAvatar(e.target.value)}
                placeholder="Avatar URL"
              />

              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="textarea"
                placeholder="About you"
              />

              <button onClick={handleSave}>
                Save
              </button>

              <button onClick={() => setEditMode(false)}>
                Cancel
              </button>
            </>
          )}

          {isOwnProfile && (
            <button
              className="logout"
              onClick={() => navigate("/create-post")}
            >
              Post something!
            </button>
          )}
        </div>
      </div>
    </div>
  );
}