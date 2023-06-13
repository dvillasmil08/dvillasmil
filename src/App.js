import React from "react";
import { Route, Routes } from "react-router-dom";
import { createHashHistory } from "history"; // Import createHashHistory from history package

import Contact from "./pages/Contact";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Notfound from "./pages/404";
import Homepage from "./pages/Homepage";
import "./App.css"

const history = createHashHistory(); // Create hash history instance


const App = () => {
  return (
    <div className="App">
      <Routes history={history}>
          <Route path="/" exact={true} element={<Homepage />} />
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
