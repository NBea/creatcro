import "../index.scss";
import Snippet from "../components/sections/Snippet/Snippet";
import GalleryAll from "../components/sections/GalleryAll/GalleryAll";

function Gallery() {
  return (
    <div>
        <Snippet bgClass="home">
            <div className="SnippetWidth">
              <h2 className="orange naslov">Gallery</h2>
              <p className="author">Browse some of the works of others imagination, spark your creative side. <br/>
              <span className="blue">Photography or artwork</span></p>
            </div>
        </Snippet>
        <div>
          <GalleryAll mode="all" />
        </div>

    </div>
  );
} 

export default Gallery;