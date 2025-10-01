import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Home Page</h1>
      <button onClick={() => navigate("/about")} className="aboutBtn">
        Go to About Page
      </button>
    </div>
  );
}

export default Home;
