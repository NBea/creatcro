import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../utils/auth";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Fill all fields");
      return;
    }

    const success = login({ username, password });

    if (!success) return;

    navigate("/");
  };



  return (
    <div className="authPage division">
      <div className="centerHeader" style={{ width:"100%", display:"flex", flexDirection:"column", alignItems:"center" }}>
      <h1>Login</h1>

      <input
        type="text"
        placeholder="Username"
        className="addComment"
        value={username}
        style={{textAlign:"center"}}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        style={{textAlign:"center"}}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <button onClick={handleLogin}  className="seeMoreOrange width" style={{ border:"none", width:"80%" }} >
        Log in
      </button>
      </div>
    </div>
  );
}