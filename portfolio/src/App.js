import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Notfound from "./pages/404";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <div className="App">
        <Routes>
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
