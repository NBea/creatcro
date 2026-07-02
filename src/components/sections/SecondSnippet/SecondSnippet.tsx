import "./SecondSnippet.scss";
import brush from "../../../assets/brush.png";
import { useEffect, useState } from "react";

export default function SecondSnippet() {
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <div className="wrapperSecondSnippet">
      <img src={brush} alt="brush" />

      <h2>
        {language === "hr" ? (
          <>
            Jedva čekamo vidjeti <span className="blue">tvoje radove</span>!
          </>
        ) : (
          <>
            Can’t wait to see <span className="blue">your work</span>!
          </>
        )}
      </h2>
    </div>
  );
}