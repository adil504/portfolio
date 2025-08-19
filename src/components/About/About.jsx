import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-box">
        <h1>About Me</h1>
        <p>
          Hi 👋, I am <b>Your Name</b>.  
          I am learning <span className="highlight">Full Stack Development</span>  
          with a passion for creating stylish and functional web applications.
        </p>

        <p>
          I love working with <span className="highlight">React, HTML, CSS, and JavaScript</span>.  
          My goal is to become a <b>MERN Stack Developer</b> 🚀.
        </p>

        <button className="know-more-btn">Know More</button>
      </div>
    </div>
  );
}

export default About;
