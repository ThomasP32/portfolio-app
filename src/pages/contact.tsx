import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <a
        href="https://github.com/ThomasP32"
        target="_blank"
        rel="noreferrer"
        className="hover:scale-110 transition-transform duration-300"
      >
        <img
          src="assets/GitHub-Logos/GitHub_Logo.png"
          alt="GitHub link"
          className="w-48 h-auto drop-shadow-lg"
        />
      </a>
    </div>
  );
};

export default Contact;