import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { getUser } from "../../utils/auth";
import { posts } from "../../data/posts";
import "./CreatePost.scss";
import { useLocation } from "react-router-dom";

export default function CreatePost() {
const navigate = useNavigate();

const user = getUser();
const location = useLocation();
const originalPost = location.state?.originalPost;

const isRemix = !!originalPost;
  if (!user) {
    return <Navigate to="/login" replace />;
  }


  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);

const [type, setType] = useState<"photography" | "artwork">(
  originalPost ? "artwork" : "photography"
);
const [category, setCategory] = useState<"nature" | "water" | "people">("nature");

  function handleImage(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit() {
    if (!title || !image) return;

    const newPost = {
    id: Date.now(),
    title,
    description,
    image,
    author: user!.username,
    type,
    category,
    photoId: originalPost?.id, // 👈 KLJUČNA STVAR
  };

    posts.unshift(newPost);

    navigate(`/profile/${user!.username}`);
  }

  return (
    <div style={{ padding: "20px" }} className="wrapperCreatePost">
      <h2>Create Post</h2>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <br />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <br />

      <select
        value={type}
        disabled={isRemix}
        onChange={(e) => setType(e.target.value as any)}
      >
      <option value="photography">Photography</option>
      <option value="artwork">Artwork</option>
    </select>

    <br />

    <select value={category} onChange={(e) => setCategory(e.target.value as any)}>
      <option value="nature">Nature</option>
      <option value="water">Water</option>
      <option value="people">People</option>
    </select>

    {originalPost && (
    <div className="originalPreview">
      <h3>Original Image:</h3>
      <img src={originalPost.image} />
      <p>{originalPost.title}</p>
    </div>
  )}

    <br/>

      <label className="uploadButton">
        Choose image
        <input
          type="file"
          accept="image/*"
          onChange={handleImage}
        />
      </label>

      {image && (
        <img
          src={image}
          alt="preview"
          style={{ width: "200px", marginTop: "10px" }}
        />
      )}

      <br />

      <button onClick={handleSubmit} className="seeMoreBlue">
        Publish
      </button>
    </div>
  );
}