import { useState } from "react";
import "./GalleryAll.scss";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { posts } from "../../../data/posts";

type GalleryProps = {
  mode: "all" | "challenge";
};

export default function GalleryAll({ mode }: GalleryProps) {
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // 🔥 from PostInfo click (category/type filter)
  const initialCategory = location.state?.category || "all";
  const initialType = location.state?.type || "all";

  const [typeFilter, setTypeFilter] = useState(initialType);
  const [categoryFilter, setCategoryFilter] = useState(initialCategory);

  // 🔥 from "See more related works"
  const photoId = searchParams.get("photoId");

  const filteredPosts = posts.filter((p) => {
    // 1. mode rule (challenge = only photography)
    const isPhotography =
      mode === "challenge"
        ? p.type === "photography"
        : true;

    // 2. type filter (only in all mode)
    const typeMatch =
      mode === "all"
        ? typeFilter === "all" || p.type === typeFilter
        : isPhotography;

    // 3. category filter
    const categoryMatch =
      categoryFilter === "all" ||
      p.category === categoryFilter;

    // 4. related works filter (photoId)
    const photoMatch =
      !photoId || p.photoId === Number(photoId);

    return typeMatch && categoryMatch && photoMatch;
  });

  return (
    <div className="gallery">

      <h2 className="browseWorksTitle blue naslov">
        {mode === "challenge" ? "" : "Browse all works"}
      </h2>

      {/* TYPE FILTER */}
      {mode === "all" && (
        <div className="filters mainFilter">
          <button
            className={typeFilter === "all" ? "active" : ""}
            onClick={() => setTypeFilter("all")}
          >
            All
          </button>

          <button
            className={typeFilter === "photography" ? "active" : ""}
            onClick={() => setTypeFilter("photography")}
          >
            Photography
          </button>

          <button
            className={typeFilter === "artwork" ? "active" : ""}
            onClick={() => setTypeFilter("artwork")}
          >
            Artwork
          </button>
        </div>
      )}

      {/* CATEGORY FILTER */}
      <div className="filters secondFilter">
        <p>filters:</p>

        <button
          className={categoryFilter === "all" ? "active" : ""}
          onClick={() => setCategoryFilter("all")}
        >
          All
        </button>

        <button
          className={categoryFilter === "nature" ? "active" : ""}
          onClick={() => setCategoryFilter("nature")}
        >
          Nature
        </button>

        <button
          className={categoryFilter === "people" ? "active" : ""}
          onClick={() => setCategoryFilter("people")}
        >
          People
        </button>

        <button
          className={categoryFilter === "water" ? "active" : ""}
          onClick={() => setCategoryFilter("water")}
        >
          Water
        </button>

      </div>

      {/* GRID */}
      <div className="grid">
        {filteredPosts.map((post) => (
          <Link
            key={post.id}
            to={
              mode === "challenge"
                ? `/challenge/post/${post.id}`
                : `/post/${post.id}`
            }
            className="card">

            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
          </Link>
        ))}
      </div>

    </div>
  );
}