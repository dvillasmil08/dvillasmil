import React from "react";
import Project from "./Project";
import { INFO } from "../../data/user";
import "./styles/AllProjects.css";

const AllProjects = () => {
  return (
    <div className="all-projects-container">
      {INFO.projects.map((project, index) => (
        <div className="all-projects-project" key={index}>
          <Project
            logo={project.logo}
            // logo2={project.logo2}
            title={project.title}
            description={project.description}
            codeText={project.codeText}
            sourceCode={project.sourceCode}
          />
        </div>
      ))}
    </div>
  );
};

export default AllProjects;
