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
        <Route path="/about" element={<About/>} />
        <Route path="/course" element={<Course/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
  );
};

export default App;