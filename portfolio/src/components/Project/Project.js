import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";

const Projects = () => {
  const placeholderImage = "https://via.placeholder.com/200"; // Placeholder image URL

  return (
    <div className="card">
      {projects.map((project) => (
        <div className="card-project">
          <img src={placeholderImage} alt="profile" className="card-image" />
          <h3 className="card-title">{project.name}</h3>
          <p className="card-text">{project.description}</p>
          <a href={project.homepage} className="card-link">
            Link to project
          </a>
          <a href={project.repository} className="card-link">
            Link to repository
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
