import React from "react";
import "./Home.css";  // Home page styles

function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>👋 Welcome to My Website</h1>
        <p>
          This is my <b>Home Page</b>.  
          Here you will find my profile, projects, and contact details.
        </p>
        <button className="explore-btn">Explore Portfolio 🚀</button>
      </div>
    </div>
  );
}

export default Home;
