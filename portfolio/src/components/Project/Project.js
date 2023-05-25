import React from "react";
import { projects } from "../../portfolio";
import "./Project.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLemon } from "@fortawesome/free-regular-svg-icons";


const Projects = () => {

  return (
    <div className="projects">
      <h2 className="projects-title">Projects</h2>
      {projects.map((project) => {
        const { livePreview, sourceCode, id, name, description, stack } = project;

        const stackItems = stack.map((item, index) => (
          <li key={index} className="stack-item">
            {item}
          </li>
        ));

        return (
          <div className={'project-id'} key={id}>
            <div className="project-content">
              <div className="project-text">
                <h3 className="project-title">{name}</h3>
                <div className="project-description">{description}</div>
              </div>
              <div className="project-links">
                <a href={sourceCode} target="_blank">
                <FontAwesomeIcon icon={faGithub} className="icon" />
              </a>
                {livePreview && (
                  <a href={livePreview} target="_blank">
                    <FontAwesomeIcon icon={faLemon} className="icon"/> 
                  </a>
                )}
              </div>
            </div>
            <ul className="project-stack">{stackItems}</ul>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
