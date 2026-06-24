import { useParams, useLocation } from "react-router-dom";
import { posts } from "../data/posts";
import { comments } from "../data/comments";
import {
  getArtworksByPhoto,
  getPhotoByArtwork,
} from "../data/relations";

import PostHero from "../components/sections/Posts/PostHero/PostHero";
import PostInfo from "../components/sections/Posts/PostInfo/PostInfo";
import RelatedWorks from "../components/sections/Posts/RelatedWorks/RelatedWorks";
import Comments from "../components/sections/Posts/Comments/Comments";
import OriginalPhoto from "../components/sections/Posts/OriginalPhoto/OriginalPhoto";

export default function PostDetails() {
  const { id } = useParams();
  const location = useLocation();

  const isChallenge = location.pathname.includes("/challenge");

  const post = posts.find(
    (p) => p.id === Number(id)
  );

  if (!post) return <h2>Not found</h2>;

  const postComments = comments.filter(
    (c) => c.postId === post.id
  );

  const relatedArtworks =
    post.type === "photography"
      ? getArtworksByPhoto(post.id)
      : [];

  const originalPhoto =
    post.type === "artwork" && post.photoId
      ? getPhotoByArtwork(post.photoId)
      : null;

  const showRelated = !isChallenge;

  return (
    <div>

      <PostHero post={post} />
      <PostInfo post={post} />

      {originalPhoto && (
        <OriginalPhoto photo={originalPhoto} artworkId={post.id} />
      )}

      <Comments comments={postComments} postId={post.id} />

      {showRelated && relatedArtworks.length > 0 && (
        <RelatedWorks
          relatedArtworks={relatedArtworks}
          photoId={post.photoId ?? post.id}
        />
      )}


    </div>
  );
}