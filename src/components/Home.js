import React, { useEffect, useState } from "react";
import "../styles/Home.css";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true); // Trigger the visibility effect when the component mounts
  }, []);

  return (
    <div className={`home-container ${isVisible ? "fade-in" : ""}`}>
      <h1>Advent T Shumba</h1>
      <h2>
        Junior Web Developer trainee @ <a href="https://uncommon.org">Uncommon.org</a>
      </h2>
      <p>
        Building polished software experiences with magical, unique, and
        delightful details, for the web. I aim to create beautiful and
        functional software apps that are both intuitive and enjoyable for
        users.
      </p>
      <p>
        I have a passion for learning, and I am constantly seeking to improve
        my skills mostly through reading and writing.
        I am interested in C++ and Ruby, and at the same time, I am also
        experimenting with native apps with Swift.
      </p>

      {/* Resume download link */}
      <div className="resume-container">
        <a
          href="/public/Advent Tatenda shumba CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          Download Resume
        </a>
      </div>

      <div className="squiggly"></div>
      <div className="links">
        {/* Social Media Links */}
        <a href="https://x.com/@koy_august">Follow me on X</a>
        <a href="https://github.com/kory0829">Collaborate on Git</a>
        <a href="https://t.me/+263784443299">Send me a DM</a>
      </div>
    </div>
  );
};

export default Home;
