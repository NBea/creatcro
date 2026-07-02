import "./About.scss";
import easelIcon from "../../../assets/easel-icon.png";
import { useEffect, useState } from "react";

function About() {
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <div className="box-about">

      <h1 className="aboutTitle">
        {language === "hr" ? "Što možeš raditi ovdje?" : "What to do here?"}
      </h1>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              Želiš objaviti svoje fotografije? <span className="blue">Objavi ih.</span>
            </>
          ) : (
            <>
              Want to post your photographs? <span className="blue">Post them.</span>
            </>
          )}
        </p>
      </div>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              Želiš skicirati nešto ili stvoriti cijeli komad svog života u umjetnosti?{" "}
              <span className="blue">Bilo što je savršeno!</span>
            </>
          ) : (
            <>
              Do you want to sketch something or capture a part of your life in a masterpiece?{" "}
              <span className="blue">Either one is perfect!</span>
            </>
          )}
        </p>
      </div>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              Nemaš ideju što crtati? <span className="blue">Mi smo tu za tebe!</span>
            </>
          ) : (
            <>
              Don’t have an idea what to draw? <span className="blue">We’ve got you!</span>
            </>
          )}
        </p>
      </div>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              Pogledaj fotografije zajednice i <span className="blue">nacrtaj ono što vidiš!</span>
            </>
          ) : (
            <>
              Take a look at community photography and{" "}
              <span className="blue">draw what you see!</span>
            </>
          )}
        </p>
      </div>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              <span className="blue">Podijeli</span> s nama što si stvorio i iznenadi fotografa svojom interpretacijom.
            </>
          ) : (
            <>
              <span className="blue">Share</span> what you created and surprise the photographer with your interpretation.
            </>
          )}
        </p>
      </div>

      <div className="aboutBox">
        <img src={easelIcon} alt="brush" />
        <p>
          {language === "hr" ? (
            <>
              Samo želiš pregledavati? <span className="blue">Nema problema!</span> Pogledaj radove zajednice.
            </>
          ) : (
            <>
              Just want to browse? <span className="blue">No problem!</span> Check out the community masterpieces.
            </>
          )}
        </p>
      </div>

    </div>
  );
}

export default About;