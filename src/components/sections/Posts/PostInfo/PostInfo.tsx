import "./PostInfo.scss";
import type { Post } from "../../../../data/posts";
import { Link } from "react-router-dom";
import { users } from "../../../../data/users";

type PostInfoProps = {
  post: Post;
};



function PostInfo({ post }: PostInfoProps) {
  const author = users.find(
    (u) => u.username === post.author
  );
  return (
    <div className="postInfo">
      <Link to={`/profile/${post.author}`} className="author">
        Author:  
        <img src={
            author?.avatar ||
            "https://placehold.co/100x100"
          }
          alt={post.author}
        />
        {post.author}
      </Link>
      <div className="category">

        <Link
          to="/gallery"
          state={{ type: post.type }}
          className="categoryButton"
        >
          {post.type}
        </Link>

        <Link
          to="/gallery"
          state={{ category: post.category }}
          className="categoryButton"
        >
          {post.category}
        </Link>

      </div>

      <p className="tagDescription">
        Description:
      </p>

      <p className="description">
        {post.description}
      </p>
      <br/>
      {post.type === "photography" && (
      <Link
        to="/create-post"
        state={{ originalPost: post }}
        className="little"
      >
        Post your version
      </Link>
    )}

    </div>
  );
}

export default PostInfo;