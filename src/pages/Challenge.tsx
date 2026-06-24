import "../index.scss";
import TitleChallenge from "../components/sections/TitleChallenge/TitleChallenge";
import Snippet from "../components/sections/Snippet/Snippet";
import GalleryAll from "../components/sections/GalleryAll/GalleryAll";

function Challenge() {
  return (
    <div>
      <TitleChallenge />
      <Snippet bgClass="home down">
        <span className="orange upper">Browse some of the works</span>
      </Snippet>
      <GalleryAll mode="challenge" />

    </div>
  );
} 

export default Challenge;