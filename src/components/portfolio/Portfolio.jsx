import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>🎉 Welcome to My Portfolio 🎉</h1>
      <p>This is your private portfolio, visible only after login ✅</p>

      <div className="projects">
        <div className="project-card">🌐 Project 1</div>
        <div className="project-card">📱 Project 2</div>
        <div className="project-card">💻 Project 3</div>
      </div>
    </div>
  );
}

export default Portfolio;
