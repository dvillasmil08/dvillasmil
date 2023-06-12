import React from "react";
import { Route, Routes } from "react-router-dom";
import { hashHistory } from "react-router"; // Import hashHistory from react-router

import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Notfound from "./pages/404";
import Homepage from "./pages/Homepage";
import "./App.css"

const App = () => {
  return (
    <div className="App">
        <Routes history={hashHistory}>
        {/* Routes */}
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
    </div>
  );
};

export default App;
