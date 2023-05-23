import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";

const Projects = () => {
  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      {projects.map((project) => {
        const { livePreview, sourceCode, id, name, description, stack } = project;
        const stackItems = stack.map((item, index) => (
          <li key={index} className="stack-item">{item}</li>
        ));
        
        return (
          <div className="project-id" key={id}>
            <h3 className="project-title">{name}</h3>
            <p className="project-text">{description}</p>
            <a href={sourceCode} className="project-repo">
              Repository.
            </a>
            {livePreview && (
              <a target="_blank" href={livePreview} className="project-demo">
                Demo.
              </a>
            )}
            <ul className="project-stack">{stackItems}</ul> {/* Render the stack as a list */}
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
