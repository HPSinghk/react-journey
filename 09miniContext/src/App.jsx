import { useState, useContext } from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import "./App.css";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <div className="w-full bg-gray-800 h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col p-3">
        <UserContextProvider>
          <div className="text-2xl text-white text-center">
            Tutorial of API Context
          </div>
          <Login />
          <Profile />
        </UserContextProvider>
      </div>
    </div>
  );
}

export default App;
