import { useEffect, useState } from "react";
import "./LanguageSwitcher.scss";

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage === "hr" || savedLanguage === "en") {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (lang: "hr" | "en") => {
    setLanguage(lang);
    localStorage.setItem("language", lang);

    // Ovo ćemo kasnije zamijeniti Contextom.
    window.location.reload();
  };

  return (
    <div className="languageSwitcher">
      <button
        className={language === "hr" ? "active" : ""}
        onClick={() => changeLanguage("hr")}
      >
        HR
      </button>

      <span>|</span>

      <button
        className={language === "en" ? "active" : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
    </div>
  );
}