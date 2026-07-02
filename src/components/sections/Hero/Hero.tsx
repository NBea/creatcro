import "./Hero.scss";
import brush from "../../../assets/brush.png";
import { useEffect, useState } from "react";

function Hero() {
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <header data-lang={language}>
      <div className="box-header">

        <div className="text-header">

          <h1 className="text-header heroOrange">
            {language === "hr"
              ? "SVLADAJ SVOJU KREATIVNOST"
              : "MASTER YOUR CREATIVITY"}
          </h1>

          <h4 className="text-header heroBlue">
            {language === "hr"
              ? "Postani jedno sa svojom kreativnom stranom."
              : "Be one with your creative side."}
          </h4>

          <h4 className="text-header heroTitle">
            {language === "hr"
              ? "Pridruži se. Crtaj. Zabavi se. Komuniciraj."
              : "Join. Draw. Have fun. Communicate."}
          </h4>

        </div>

        <div className="image-header"></div>

        <div className="icon-header">
          <img src={brush} alt="brush" />
        </div>

      </div>
    </header>
  );
}

export default Hero;