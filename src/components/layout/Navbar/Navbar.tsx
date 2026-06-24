import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getUser, logout } from "../../../utils/auth";

function Navbar() {
  const [user, setUser] = useState(getUser());
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleChange = () => {
      setUser(getUser());
    };

    window.addEventListener("authChange", handleChange);

    return () => {
      window.removeEventListener("authChange", handleChange);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-links">
        <div className="left">
          <Link to="/" className="nav-home">
            Croatcro
          </Link>
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`middle ${menuOpen ? "active" : ""}`}>
          <Link to="/challenge" onClick={() => setMenuOpen(false)}>
            Challenge
          </Link>

          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </div>

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
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="join"
                onClick={() => setMenuOpen(false)}
              >
                Join
              </Link>

              <Link
                to="/login"
                onClick={() => setMenuOpen(false)}
              >
                Log in
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;