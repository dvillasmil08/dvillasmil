import React from "react";
import { hobbies } from "../../portfolio";
import "./Hobby.css";
import logo from "../../Images/logo192.png"


const Hobbies = () => {

  return (
    <div className="hobbies">
      <h2 className="hobbies-title">Hobbies and involvements</h2>
      {hobbies.map((hobby) => (
        <div className="hobby-id" key={hobby.id}>
          <h3 className="hobby-name">{hobby.name}</h3>
          <img src={hobby.image} alt="Hobby" className="hobby-image" />
          <div className="hobby-text">{hobby.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Hobbies;

