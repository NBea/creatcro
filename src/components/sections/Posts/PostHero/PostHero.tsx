import { useState } from "react";
import "./PostHero.scss";
import type { Post } from "../../../../data/posts";

type PostHeroProps = {
  post: Post;
};

function PostHero({ post }: PostHeroProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="postHero">
      <img
        src={post.image}
        alt={post.title}
        onClick={() => setOpen(true)}
        className="clickableImage"
      />
      <div className="titlePost">
      <h1>{post.title}</h1>
      </div>

      {/* LIGHTBOX */}
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          
          <button
            className="closeBtn"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          >
            ✕
          </button>

          <img src={post.image} alt={post.title} />
        </div>
      )}
    </div>
  );
}

export default PostHero;