import React from "react";
import { Link } from "react-router-dom";

const MainView = () => {
  return (
    <div>
      <h1>Main View</h1>
      <nav>
        <Link to="/bio">Bio</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
};

export default MainView;
