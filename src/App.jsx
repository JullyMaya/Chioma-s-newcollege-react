import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPageScreen from "./Pages/LandingPageScreen"; 
import About from "./Pages/About"
import Course from "./Pages/Course"
import Contact from "./Pages/Contact"
import Home from "./Pages/Home"

const App = () => {
  return (

      <Routes>
        <Route path="/" element={<LandingPageScreen />} />
        <Route path="/about" element={<div>About Page</div>} />
        <Route path="/courses" element={<div>Courses Page</div>} />
        <Route path="/blog" element={<div>Blog Page</div>} />
        <Route path="/contact" element={<div>Contact Page</div>} />
      </Routes>
  );
};

export default App;