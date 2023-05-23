import React from "react";
import { about } from "../../portfolio";
import "../Body/Body.css";

const Body = () => {
  const { name, description, image, linkedin, github } = about;
  const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

  return (
    <div className="profile">
      <img src={placeholderImage} alt="profile" className="profile-image" />
      <h3 className="profile-title">Hi there!</h3>
      <p className="profile-text">{description}</p>
    </div>
  );
};

export default Body;
