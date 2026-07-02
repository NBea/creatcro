import "../index.scss";
import { useEffect, useState } from "react";

import Hero from "../components/sections/Hero/Hero";
import About from "../components/sections/About/About";
import Snippet from "../components/sections/Snippet/Snippet";
import GallerySection from "../components/sections/GallerySection/GallerySection";
import SecondSnippet from "../components/sections/SecondSnippet/SecondSnippet";
import LanguageSwitcher from "../components/sections/LanguageSwitcher/LanguageSwitcher";

function Home() {
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <div>

      <Hero />
      <About />

      <Snippet bgClass="home down">
        {language === "hr" ? (
          <>
            Želimo da otkriješ svoju <span className="blue">kreativnu stranu.</span>
          </>
        ) : (
          <>
            We want you to tap into your <span className="blue">creative side.</span>
          </>
        )}
      </Snippet>

      <GallerySection />

      <SecondSnippet />

      <LanguageSwitcher />

    </div>
  );
}

export default Home;