import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { handleLogin } from "../../Helpers/handleLogin";

function Login() {
  const {
    admin,
    employees,
    setCurrentUser,
    setCurrentEmployee,
    setCurrentAdmin,
  } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const details = {
    username,
    password,
    admin,
    employees,
    setCurrentUser,
    setCurrentEmployee,
    setUsername,
    setCurrentAdmin,
    setPassword,
  };
  return (
    <div className="bg-gray-950 text-black h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-emerald-500 p-16 rounded-lg bg-transparent">
        <form
          className="flex flex-col gap-4"
          onSubmit={(e) => handleLogin(e, details)}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter Username"
            className="text-xl rounded-full text-white border-emerald-500 bg-transparent border-2 px-3 py-2 focus:outline-none placeholder:text-gray-700"
            required
            autoComplete="username"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="text-xl rounded-full text-white border-emerald-500 border-2 bg-transparent px-3 py-2 focus:outline-none placeholder:text-gray-700"
            required
            autoComplete="current-password"
          />

          <button
            className="bg-emerald-600 rounded-full px-1 py-2 active:bg-emerald-900 active:scale-90 text-white mt-4"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
