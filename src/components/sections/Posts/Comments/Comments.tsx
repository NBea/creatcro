import { useState, useEffect } from "react";
import "./Comments.scss";
import type { Comment } from "../../../../data/comments";
import { getUser } from "../../../../utils/auth";
import { useNavigate, Link } from "react-router-dom";
import { users as demoUsers } from "../../../../data/users";

type Props = {
  comments: Comment[];
  postId: number;
};

function Comments({ comments, postId }: Props) {
  const [list, setList] = useState<Comment[]>([]);
  const [text, setText] = useState("");
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  const storedUsers = JSON.parse(
    localStorage.getItem("users") || "[]"
  );

  const allUsers = [...demoUsers, ...storedUsers];

  useEffect(() => {
    setList(comments.filter((c) => c.postId === postId));
  }, [comments, postId]);

  useEffect(() => {
    const handleChange = () => setUser(getUser());

    window.addEventListener("authChange", handleChange);

    return () => {
      window.removeEventListener("authChange", handleChange);
    };
  }, []);

  const addComment = () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!text.trim()) return;

    const newComment: Comment = {
      id: Date.now(),
      postId,
      authorId: user.id, // 🔥 sada uvijek postoji
      text,
    };

    setList([newComment, ...list]);
    setText("");
  };

  return (
    <div className="comments">
      <h2>Comments</h2>

      {list.map((c) => {
        const authorUser = allUsers.find(
          (u) => u.id === c.authorId
        );

        return (
          <div key={c.id} className="comment">
            <Link
              to={`/profile/${authorUser?.username}`}
              className="author"
            >
              <img
                src={
                  authorUser?.avatar ||
                  "https://placehold.co/100x100"
                }
                alt={authorUser?.username}
              />
              <strong>{authorUser?.username}</strong>
            </Link>

            <p>{c.text}</p>
          </div>
        );
      })}

      <div className="addComment">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write a comment..."
        />

        <button onClick={addComment} className="seeMoreOrange">
          Post
        </button>
      </div>
    </div>
  );
}

export default Comments;