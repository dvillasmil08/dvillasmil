import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";
import logo from "../../Images/logo192.png"

const Projects = () => {

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2> {/* Add the title */}
      {projects.map((project) => {
        const { livePreview, sourceCode, id, name, description, stack } = project;
        
        return (
          <div className="project-id" key={id}>
            {/* <img src={logo} alt="profile" className="project-image" /> */}
            <h3 className="project-title">{name}</h3>
            <p className="project-text">{description}</p>
            <a href={sourceCode} className="project-repo">
              Repository.
            </a>
            {livePreview && ( // Check if livePreview prop exists
              <a target="_blank" href={livePreview} className="project-demo">
                Demo.
              </a>
            )}
            <p className="project-stack">{stack}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
