import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Hobby from "./components/Hobby/Hobby";
import Home from "./components/Home/Home";
//Had to add the below import due to a warning message suggested that you need to define the app element for react-modal to ensure proper accessibility when the modal is opened.
//This is done using the Modal.setAppElement(el) function or by setting the appElement prop.
import Modal from "react-modal";


const App = () => {
  Modal.setAppElement("#root");

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" 
          element={<Home />} 
          />
          <Route path="/projects" element={<Project />} />
          <Route path="/hobbies" element={<Hobby />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
