import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    setError("");

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setError("Fill all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const success = register({
      username,
      email,
      password,
    });

    if (!success) {
      setError("User already exists");
      return;
    }

    navigate("/login");
  };

  return (
    <div className="authPage division">
      <div
        className="centerHeader"
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1>Register</h1>

        <input
          type="text"
          placeholder="Username"
          className="addComment"
          value={username}
          style={{ textAlign: "center" }}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="addComment"
          value={email}
          style={{ textAlign: "center" }}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="addComment"
          value={password}
          style={{ textAlign: "center" }}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="addComment"
          value={confirmPassword}
          style={{ textAlign: "center" }}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button
          onClick={handleRegister}
          className="seeMoreOrange width"
          style={{
            border: "none",
            width: "80%",
          }}
        >
          Register
        </button>
      </div>
    </div>
  );
}