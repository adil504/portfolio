import React from "react";
import "./Services.css";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa";

function Services() {
  return (
    <div className="services-container">
      <h1>My Services</h1>
      <div className="services-box">
        
        <div className="service-card">
          <FaCode className="service-icon" />
          <h2>Web Development</h2>
          <p>
            I create responsive and user-friendly websites using 
            <b> HTML, CSS, JavaScript, and React</b>.
          </p>
        </div>

        <div className="service-card">
          <FaPaintBrush className="service-icon" />
          <h2>UI/UX Design</h2>
          <p>
            Designing clean and modern interfaces that give users 
            the best experience.
          </p>
        </div>

        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h2>Responsive Design</h2>
          <p>
            I make sure all my websites look perfect on 
            <b>Mobile, Tablet, and Desktop</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;