import React from "react";
import { about } from "../../portfolio";
import "./Body.css";

const Body = () => {
  const { name, description, image, linkedin, github } = about;
  const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

  return (
    <div className="card">
      <img src={placeholderImage} alt="profile" className="card-image" />
      <h3 className="card-title">Hi there!</h3>
      <p className="card-text">{description}</p>
      <div className="card-social">
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          {linkedin}
        </a>
        <br />
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="card-link"
        >
          {github}
        </a>
      </div>
    </div>
  );
};

export default Body;
