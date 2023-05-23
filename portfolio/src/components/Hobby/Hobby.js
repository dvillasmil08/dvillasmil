import React from "react";
import { hobbies } from "../../portfolio";
import "./Hobby.css";

const Hobbies = () => {
  const placeholderImage = "https://via.placeholder.com/200"; // Placeholder image URL

  return (
    <div className="hobbies">
      <h2 className="hobbies-title">Hobbies and involvements</h2>
      {hobbies.map((hobby) => (
        <div className="hobby-id" key={hobby.id}>
          <img src={placeholderImage} alt="Hobby" className="hobby-image" />
          <h3 className="hobby-name">{hobby.name}</h3>
          <p className="hobby-text">{hobby.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;

