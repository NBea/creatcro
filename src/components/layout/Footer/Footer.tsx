import "./Footer.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "../../../utils/auth";
import logo from "../../../assets/logo3-2.svg";

export default function Footer() {
  const user = getUser();

  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <div className="wrapperFooter">

      <div className="leftFooter">

        <p className="blue">
          {language === "hr" ? "Pridruži se zabavi!" : "Join in the fun!"}
        </p>

        <Link to="/" className="bigger">
          <img src={logo} alt="CreatCro" />
        </Link>

      </div>

      <div className="rightFooter">

        {!user ? (
          <>
            <Link to="/login">
              {language === "hr" ? "Prijava" : "Log in"}
            </Link>

            <Link to="/register">
              {language === "hr" ? "Pridruži se" : "Join"}
            </Link>
          </>
        ) : (
          <Link to={`/profile/${user.username}`}>
            {language === "hr" ? "Profil" : "Profile"}
          </Link>
        )}

        <Link to="/challenge">
          {language === "hr" ? "Izazovi" : "Challenges"}
        </Link>

        <Link to="/gallery">
          {language === "hr" ? "Galerija" : "Browse"}
        </Link>

      </div>

    </div>
  );
}