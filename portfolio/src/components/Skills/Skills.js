import React from "react";
import { skills } from "../../portfolio";

const Skills = () => {
    return (
        <section>
            <h2>
            Skills
            </h2>
            <ul>
                {skills.map((skill) => (
                <li className='skills__list-item btn btn--plain'>
                    {skill}
                </li>
                ))}
            </ul>
        </section>
    )
}
export default Skills