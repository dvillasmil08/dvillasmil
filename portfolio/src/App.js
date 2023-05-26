import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Projects/Project";
import Hobby from "./components/Hobbies/Hobby";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
//Had to add the below import due to a warning message suggested that you need to define the app element for react-modal to ensure proper accessibility when the modal is opened.
//This is done using the Modal.setAppElement(el) function or by setting the appElement prop.

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/hobbies" element={<Contact />} />
        <Route path="/*" element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default App;
