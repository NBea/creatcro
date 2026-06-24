import { posts } from "./posts";
import type { Post } from "./posts";

// original photo za artwork
export function getPhotoByArtwork(photoId?: number): Post | null {
  if (!photoId) return null;

  const photo = posts.find(
    (p) => p.id === photoId && p.type === "photography"
  );

  return photo ?? null;
}

// artworks za jednu fotografiju
export function getArtworksByPhoto(photoId: number): Post[] {
  return posts.filter(
    (p) => p.type === "artwork" && p.photoId === photoId
  );
}