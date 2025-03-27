import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact</h1>
      <div className="links-container">
        <a className="github"
          href="https://github.com/ThomasP32"
          target="_blank"
          rel="noreferrer"
        >
        <img className="github-logo"
          src="assets/GitHub-Logos/GitHub_Logo.png"
          alt="GitHub link"
        />
        </a>
        <a className="linkedin"
          href="https://www.linkedin.com/in/thomas-perron-duveau-b60738264/"
          target="_blank"
          rel="noreferrer"
        >
        <img className="linkedin-logo"
          src="assets/LI-Logo.png"
          alt="LinkedIn link"
        />
        </a>
      </div>
    </div>
  );
};

export default Contact;