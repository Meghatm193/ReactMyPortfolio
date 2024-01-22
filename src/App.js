import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Project from "./routes/Project";

import { HashRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/index" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
