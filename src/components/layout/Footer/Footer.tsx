import "./Footer.scss";
import { Link } from "react-router-dom";
import { getUser } from "../../../utils/auth";

export default function Footer() {
  const user = getUser();

  return (
    <div className="wrapperFooter">

      <div className="leftFooter">
        <p className="blue">Join in the fun!</p>
        <Link to="/" className="bigger">
          Croatcro
        </Link>
      </div>

      <div className="rightFooter">

        {!user ? (
          <>
            <Link to="/login">Log in</Link>
            <Link to="/register">Join</Link>
          </>
        ) : (
          <Link to={`/profile/${user.username}`}>Profile</Link>
        )}

        <Link to="/challenge">Challenges</Link>
        <Link to="/gallery">Browse</Link>

      </div>

    </div>
  );
}