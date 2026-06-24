import "./OriginalPhoto.scss";
import { Link } from "react-router-dom";
import type { Post } from "../../../../data/posts";

type Props = {
  photo: Post; // 👈 ovo je photography post
  artworkId: number; // da znaš odakle dolazi
};

function OriginalPhoto({ photo }: Props) {
  return (
    <div className="originalPhoto">
      <h2>Original photo:</h2>

      <Link to={`/post/${photo.id}`}>
        <img src={photo.image} alt={photo.title} />
      </Link>
    </div>
  );
}

export default OriginalPhoto;