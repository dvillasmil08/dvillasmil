import React from "react";
import { skills } from "../../portfolio";
import './Skills.css'

const Skills = () => {
    
    return (
        <div className='skills'>
            <h3 className='skill-title'>Tech Stack</h3>
             {skills.map((skills) => (
            <div className='skill-body'>
                <p className='skill-text'>{skills}</p>
            </div>
        ))}
    </div>
        )
}
export default Skills