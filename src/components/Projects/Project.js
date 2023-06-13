import React from "react";
import { Link } from "react-router-dom";

import "./styles/Project.css";

const Project = (props) => {
	const { logo, logo2, title, description, codeText, sourceCode } = props;

	return (
		<>
			<div className="project">
				<Link to={sourceCode}>
					<div className="project-container">
						<div className="project-logo">
							<img src={logo} alt="logo" />
							{/* <img src={logo2} alt="logo2" /> */}
						</div>
						<div className="project-title">{title}</div>
						<div className="project-description">{description}</div>
						<div className="project-link">

							<div className="project-link-text">{codeText}</div>
						</div>
					</div>
				</Link>
			</div>
		</>
	);
};

export default Project;