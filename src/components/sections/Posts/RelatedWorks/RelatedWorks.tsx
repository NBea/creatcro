import "./RelatedWorks.scss";
import type { Post } from "../../../../data/posts";
import { Link } from "react-router-dom";

type Props = {
  relatedArtworks: Post[];
  photoId: number;
};

function RelatedWorks({ relatedArtworks, photoId }: Props) {
  const visibleWorks = relatedArtworks.slice(0, 6);

  return (
    <div className="relatedWorks">
      <h2>Created works</h2>

      <div className="gridRelatedWorks">
        {visibleWorks.map((a) => (
          <Link
            key={a.id}
            to={`/post/${a.id}`}
            className="cardRelatedWorks"
          >
            <img src={a.image} alt={a.title} />
            <p>{a.title}</p>
          </Link>
        ))}
      </div>

      {relatedArtworks.length > 6 && (
        <Link
          to={`/gallery?photoId=${photoId}`}
          className="seeMoreOrange"
        >
          See more
        </Link>
      )}
    </div>
  );
}

export default RelatedWorks;