import { posts } from "../../../../data/posts";
import { Link } from "react-router-dom";
import "./ProfilePosts.scss";
import type { User } from "../../../../data/users";

type Props = {
  user: User;
};

export default function ProfilePosts({ user }: Props) {
  const userPosts = posts.filter(
    (p) => p.author === user.username
  );

  const visiblePosts = userPosts.slice(0, 6);

  return (
    <div className="relatedWorks">
      <h2>Created works</h2>

      <div className="gridRelatedWorks">
        {visiblePosts.map((post) => (
          <Link
            to={`/post/${post.id}`}
            key={post.id}
            className="cardRelatedWorks"
          >
            <img src={post.image} />
            <p>{post.title}</p>
          </Link>
        ))}
      </div>

      {userPosts.length > 6 && (
        <Link
          to={`/gallery?author=${user.username}`}
          className="seeMoreOrange"
        >
          See more
        </Link>
      )}
    </div>
  );
}