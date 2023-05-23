import React from "react";
import { hobbies } from "../../portfolio";
import "./Hobby.css";

const Hobbies = () => {
  const placeholderImage = 'https://via.placeholder.com/200'; // Placeholder image URL

  
  return (
    <div className="card">
      {hobbies.map((hobby) => (
        <div className="card-project" key={hobby.id}>
          <img src={placeholderImage} alt="Hobby" className="card-image" />
          <h3 className="card-title">{hobby.name}</h3>
          <p className="card-text">{hobby.description}</p>
        </div>
      ))}
    </div>
  );
};

  
  export default Hobbies;