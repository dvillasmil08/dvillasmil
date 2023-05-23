import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";

const Projects = () => {
  const placeholderImage = "https://via.placeholder.com/200"; // Placeholder image URL

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2> {/* Add the title */}
      {projects.map((project) => (
        <div className="project-id" key={project.id}>
          <img src={placeholderImage} alt="profile" className="project-image" />
          <h3 className="project-title">{project.name}</h3>
          <p className="project-text">{project.description}</p>
          <a href={project.sourceCode} className="project-repo">
            Link to repository.
          </a>
          <a href={project.livePreview} className="project-demo">
            Link to demo.
          </a>
          <p className="project-stack">{project.stack}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
