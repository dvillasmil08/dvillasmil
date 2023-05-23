import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";

const Projects = () => {
  const placeholderImage = "https://via.placeholder.com/200"; // Placeholder image URL

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2> {/* Add the title */}
      {projects.map((project) => {
        const { livePreview, sourceCode, id, name, description, stack } = project;

        return (
          <div className="project-id" key={id}>
            <img src={placeholderImage} alt="profile" className="project-image" />
            <h3 className="project-title">{name}</h3>
            <p className="project-text">{description}</p>
            <a href={sourceCode} className="project-repo">
              Link to repository.
            </a>
            {livePreview ? ( // Check if livePreview prop is not empty or falsy
              <a target="_blank" href={livePreview} className="project-demo">
                Demo.
              </a>
            ) : null}
            <p className="project-stack">{stack}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
