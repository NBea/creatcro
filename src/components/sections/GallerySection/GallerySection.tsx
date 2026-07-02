import { useMemo, useEffect, useState } from "react";
import "./GallerySection.scss";
import { posts, type Post } from "../../../data/posts";
import { Link } from "react-router-dom";

/* --------------------------- */
function useWindowWidth() {
  const [width, setWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

/* --------------------------- */
function splitIntoRows(items: Post[]) {
  const mid = Math.ceil(items.length / 2);
  return {
    row1: items.slice(0, mid),
    row2: items.slice(mid),
  };
}

/* --------------------------- */
function duplicateForLoop(items: Post[]) {
  return [...items, ...items];
}

export default function GallerySection() {
  const width = useWindowWidth();
  const isDesktop = width >= 1024;

  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  const config = useMemo(() => {
    if (width < 480) return { limit: 4 };
    if (width < 768) return { limit: 6 };
    if (width < 1024) return { limit: 8 };
    return { limit: Infinity };
  }, [width]);

  const photos = useMemo(
    () => posts.filter((p) => p.type === "photography"),
    []
  );

  const artwork = useMemo(
    () => posts.filter((p) => p.type === "artwork"),
    []
  );

  const photoData = useMemo(() => {
    if (!isDesktop) {
      return { row1: photos, row2: [] };
    }

    const limited =
      config.limit === Infinity ? photos : photos.slice(0, config.limit);

    const rows = splitIntoRows(limited);

    return {
      row1: duplicateForLoop(rows.row1),
      row2: duplicateForLoop(rows.row2),
    };
  }, [photos, isDesktop, config.limit]);

  const artworkData = useMemo(() => {
    if (!isDesktop) return { row1: artwork, row2: [] };

    const rows = splitIntoRows(artwork.slice(0, config.limit));

    return {
      row1: duplicateForLoop(rows.row1),
      row2: duplicateForLoop(rows.row2),
    };
  }, [artwork, isDesktop, config.limit]);

  return (
    <section className="gallerySection">

      {/* ================= PHOTOS ================= */}
      <div className="gallery-group">

        <h2 className="browseWorksTitle blue">
          {language === "hr"
            ? "Pregledaj neke od radova"
            : "Browse some of the works"}
        </h2>

        <h3 className="browseTitleSection">
          {language === "hr" ? "Fotografija" : "Photography"}
        </h3>

        {/* ROW 1 */}
        <div className="row">
          <div className={`track ${isDesktop ? "animate-right" : ""}`}>
            {photoData.row1.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`} className="card1">
                <img src={post.image} alt={post.title || ""} />
                <h2>{post.title}</h2>
                <p>
                  {language === "hr" ? "Autor:" : "Author:"} {post.author}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        {isDesktop && (
          <div className="row">
            <div className="track animate-left">
              {photoData.row2.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`} className="card1">
                  <img src={post.image} alt={post.title || ""} />
                  <h2>{post.title}</h2>
                  <p>
                    {language === "hr" ? "Autor:" : "Author:"} {post.author}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/gallery"
          state={{ type: "photography", category: "all" }}
          className="seeMoreBlue"
        >
          {language === "hr"
            ? "Pogledaj sve fotografije"
            : "View all photography"}
        </Link>
      </div>

      {/* ================= ARTWORK ================= */}
      <div className="gallery-group">

        <h2 className="browseWorksTitle orange">
          {language === "hr"
            ? "Pregledaj neke od radova"
            : "Browse some of the works"}
        </h2>

        <h3 className="browseTitleSection">
          {language === "hr" ? "Umjetnost" : "Artwork"}
        </h3>

        {/* ROW 1 */}
        <div className="row">
          <div className={`track ${isDesktop ? "animate-right" : ""}`}>
            {artworkData.row1.map((post) => (
              <Link key={post.id} to={`/post/${post.id}`} className="card1">
                <img src={post.image} alt={post.title || ""} />
                <h2>{post.title}</h2>
                <p>
                  {language === "hr" ? "Autor:" : "Author:"} {post.author}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* ROW 2 */}
        {isDesktop && (
          <div className="row">
            <div className="track animate-left">
              {artworkData.row2.map((post) => (
                <Link key={post.id} to={`/post/${post.id}`} className="card1">
                  <img src={post.image} alt={post.title || ""} />
                  <h2>{post.title}</h2>
                  <p>
                    {language === "hr" ? "Autor:" : "Author:"} {post.author}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        <Link
          to="/gallery"
          state={{ type: "artwork", category: "all" }}
          className="seeMoreOrange"
        >
          {language === "hr"
            ? "Pogledaj sve radove"
            : "View all artwork"}
        </Link>
      </div>

    </section>
  );
}