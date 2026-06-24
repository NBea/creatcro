import { useParams } from "react-router-dom";
import { users as demoUsers } from "../data/users";
import { getUser } from "../utils/auth";

import ProfileHeader from "../components/sections/Profile/ProfileHeader/ProfileHeader";
import ProfilePosts from "../components/sections/Profile/ProfilePosts/ProfilePosts";

export default function Profile() {
  const { username } = useParams();
  const loggedUser = getUser();

  const targetUsername = username || loggedUser?.username;

  const storedUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const allUsers = [...demoUsers, ...storedUsers];

  const user = allUsers.find(
    (u) => u.username === targetUsername
  );

  if (!user) return <h2>User not found</h2>;

  const isOwnProfile =
    loggedUser?.username === user.username;

  return (
    <div>
      <ProfileHeader user={user} isOwnProfile={isOwnProfile} />
      <ProfilePosts user={user} />
    </div>
  );
}