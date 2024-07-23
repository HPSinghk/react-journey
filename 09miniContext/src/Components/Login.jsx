import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div className="flex flex-col justify-around h-48 items-center">
      <div className="text-center font-serif font-bold text-orange-700">
        Login Page
      </div>
      <input
        className="font-thin rounded-lg h-9 text-2xl px-2"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        type="text"
        placeholder="username"
      />
      <input
        className="font-thin rounded-lg h-9 text-2xl px-2"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        type="text"
        placeholder="password"
      />
      <button className="bg-blue-400 w-20 rounded-lg text-white" onClick={handleSubmit}>
        login
      </button>
    </div>
  );
}

export default Login;
