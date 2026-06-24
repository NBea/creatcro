import "../index.scss";
import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Snippet from "../components/sections/Snippet/Snippet";
import GallerySection from "../components/sections/GallerySection/GallerySection";
import SecondSnippet from "../components/sections/SecondSnippet/SecondSnippet";



function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Snippet bgClass="home down">
        We want you to tap into your <span className="blue">creative side.</span>
      </Snippet>
      <GallerySection />
      <SecondSnippet />

    </div>
  );
} 

export default Home;