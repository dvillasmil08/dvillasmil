import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLemon } from "@fortawesome/free-regular-svg-icons";


const Projects = () => {

  return (
    <div>
      <h2 className="projects-title">Projects</h2>
    <div className="projects">
      {projects.map((project) => {
        const { livePreview, sourceCode, id, name, description, stack } = project;
        
        const stackItems = stack.map((item, index) => (
          <li key={index} className="stack-item">
            {item}
          </li>
        ));
        
        return (
          <div className={'project-id'} key={id}>
                <h3 className="project-title">{name}</h3>
            <div className="project-content">
              <div className="project-text">
                <div className="project-description">{description}</div>
              </div>
              <div className="project-links">
                <a href={sourceCode} target="_blank">
                <FontAwesomeIcon size="2x" icon={faGithub} className="icon" />
              </a>
                {livePreview && (
                  <a href={livePreview} target="_blank">
                    <FontAwesomeIcon size="2x" icon={faLemon} className="icon"/> 
                  </a>
                )}
            <ul className="project-stack">{stackItems}</ul>
              </div>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Projects;
