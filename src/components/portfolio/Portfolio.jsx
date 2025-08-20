import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaTwitter } from "react-icons/fa"; 
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio-container">
      {/* Title */}
      <h1>🎉 Welcome to My Portfolio 🎉</h1>
      <p>This is my private portfolio, visible only after login ✅</p>

      {/* About Section */}
      <section className="about">
        <h2>👤 About Me</h2>
        <p>
          Hello! I am ADIL, a passionate full-stack developer who loves building
          modern web apps, learning new technologies, and solving real-world
          problems.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills">
        <h2>🛠️ Skills</h2>
        <div className="skills-list">
          <span>⚡ HTML</span>
          <span>⚡ CSS</span>
          <span>⚡ JavaScript</span>
          <span>⚡ React</span>
          <span>⚡ Node.js</span>
          <span>⚡ MongoDB</span>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects">
        <h2>💻 My Projects</h2>
        <div className="project-card">🌐 Project 1</div>
        <div className="project-card">📱 Project 2</div>
        <div className="project-card">💻 Project 3</div>
      </section>

      {/* Contact Section */}
      <section className="contact">
        <h2>📩 Contact Me</h2>
        <p>
          Email:{" "}
          <a href="mailto:adilshaiks7861@gmail.com">adilshaiks7861@gmail.com</a>
        </p>
        <p>📱 Phone: +91-6301863104</p>

        {/* Social Media Links */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/shaik-adil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> Shaik Adil
          </a>

          <a
            href="https://www.instagram.com/_itz_adhil_0786/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> _itz_adhil_0786
          </a>

          <a
            href="https://www.facebook.com/shaik.adil"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook /> شیخ عادل
          </a>

          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> adil504
          </a>

          <a
            href="https://twitter.com/your-twitter-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> AdilOfficial7861
          </a>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
