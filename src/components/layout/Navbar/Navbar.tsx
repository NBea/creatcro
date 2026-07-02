import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, logout } from "../../../utils/auth";

import logo from "../../../assets/logo3.svg";
import menu from "../../../assets/menu.svg";
import menuClose from "../../../assets/menu-close.svg";

function Navbar() {
  const [user, setUser] = useState(getUser());
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState<"hr" | "en">("en");

  useEffect(() => {
    const handleChange = () => {
      setUser(getUser());
    };

    window.addEventListener("authChange", handleChange);

    return () => {
      window.removeEventListener("authChange", handleChange);
    };
  }, []);

  // language sync
  useEffect(() => {
    const saved = localStorage.getItem("language") as "hr" | "en";
    if (saved) setLanguage(saved);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links">

        <div className="left">
          <Link to="/" className="nav-home">
            <img src={logo} alt="CreatCro" />
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(prev => !prev)}
        >
          {menuOpen ? <img src={menuClose} alt="menu-close" /> : <img src={menu} alt="menu" />}
        </button>

        {/* MIDDLE LINKS */}
        <div className={`middle ${menuOpen ? "active" : ""}`}>
          <Link to="/challenge" onClick={() => setMenuOpen(false)}>
            {language === "hr" ? "Izazov" : "Challenge"}
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            {language === "hr" ? "Galerija" : "Gallery"}
          </Link>
        </div>

        {/* RIGHT SIDE */}
        <div className={`right ${menuOpen ? "active" : ""}`}>


          {user ? (
            <>
              <Link
                to="/profile"
                className="profile-link"
                onClick={() => setMenuOpen(false)}
              >
                <span className="username">
                  {user.username}
                </span>

                <img src={user.avatar} />
              </Link>

              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
              >
                {language === "hr" ? "Odjava" : "Logout"}
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="join"
                onClick={() => setMenuOpen(false)}
              >
                {language === "hr" ? "Pridruži se" : "Join"}
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                {language === "hr" ? "Prijava" : "Log in"}
              </Link>
            </>
          )}
        </div>

      </div>
    </nav>
  );
}

export default Navbar;