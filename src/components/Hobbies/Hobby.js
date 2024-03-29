import React from "react";
import { hobbies } from "../../data/user";
import "./Hobby.css";


const Hobbies = () => {

  return (
    <div>

      <h2 className="hobbies-title">Hobbies and involvements</h2>
    <div className="hobbies">
      {hobbies.map((hobby) => (
        <div className="hobby-id" key={hobby.id}>
          <h3 className="hobby-name">{hobby.name}</h3>
          <img src={hobby.image} alt="Hobby" className="hobby-image" />
          <div className="hobby-text">{hobby.description}</div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Hobbies;

