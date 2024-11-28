import React, { useState, useEffect } from "react";
import "../styles/Projects.css";
import bootstrap from "../assets/projects/start-bootstrap.PNG";
import stylish from "../assets/projects/stylish-portfolio.PNG";
import nyamatusi from "../assets/projects/Nyamatusi.PNG";
import tigzozo from "../assets/projects/tigzozo.PNG";
import vanlife from "../assets/projects/Vanlife.PNG";
import resellme from "../assets/projects/resell-me.PNG";
import nowalls from "../assets/projects/no-walls.PNG";
import bakersinn from "../assets/projects/bakers-inn.PNG";

const Projects = () => {

  // Array of project objects containing title and image
  const projects = [
    { title: <a href="https://korybootstrap.netlify.app/">Boostrap Project</a>, image: bootstrap },
    { title: <a href="https://stylishportfoliokory.netlify.app/">Stylish Portfolio</a>, image: stylish },
    { title: <a href="https://nyamatusikory.netlify.app/">Nyamatusi Project</a>, image: nyamatusi },
    { title: <a href="https://tigzozokory.netlify.app/">Tigzozo Project</a>, image: tigzozo },
    { title: <a href="https://react-vanlife.netlify.app/">Vanlife Project</a>, image: vanlife },
    { title: <a href="https://resellkory.web.app/">Resell-me Project</a>, image: resellme },
    { title: <a href="https://no-walls-38621.firebaseapp.com/">No-walls Project</a>, image: nowalls },
    { title: <a href="https://bakers-inn-co.web.app/">Bakers Inn</a>, image: bakersinn }
  ];

  const [isVisible, setIsVisible] = useState(false);

  // Trigger visibility after a short delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay for container visibility
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`projects-container ${isVisible ? "visible" : ""}`}>
      {/* Loop through projects and display each project */}
      {projects.map((project, index) => (
        <div
          key={index}
          className={`projects-card`}
          style={{ transitionDelay: `${index * 0.2}s` }} // Cascading transition delay
        >
          <img src={project.image} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
