import React from "react";
import { about } from "../../data/user";
import "../Body/Body.css";
import headshot from "../../Images/profile.jpeg";

const Body = () => {
  const { name, description, image, linkedin, github } = about;

  return (
    <div className="body">
      <img src={headshot} alt="profile" className="body-image" />
      <h3 className="body-title">Hi there!</h3>
      <div className="body-text">{description}</div>
    </div>
  );
};

export default Body;
