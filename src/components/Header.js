import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 20px", backgroundColor: "#282c34", color: "white" }}>
      <h1>React App</h1>
      <nav>
        <Link to="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/about" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About</Link>
      </nav>
    </header>
  );
};

export default Header;
