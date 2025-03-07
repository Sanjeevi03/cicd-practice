import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem("login", "true");
    navigate("/")
  }
  return (
    <div>
      <h1 className="text-2xl underline">Login</h1>
      <button onClick={handleLogin} className="border-2 px-3">Login</button>
    </div>
  );
};
