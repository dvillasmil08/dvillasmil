import React from "react";
import { skills } from "../../portfolio";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills">
      <h3 className="skill-title">Tech Stack</h3>
      {skills.map((skill, index) => (
        <div className="skill-body" key={index}>
          <p className="skill-text">{skill}</p>
        </div>
      ))}
    </div>
  );
};

export default Skills;
