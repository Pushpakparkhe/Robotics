import React from "react";
import Navbar from "./Navbar";
import Home from "./Screens/Home/Home";
import { Routes, Route } from "react-router-dom";
import Services from "./Screens/Services/Services";
import About from "./Screens/About/About";
import Contact from "./Screens/Contact/Contact";
import OpenAi from "./Screens/OpenAi/OpenAi";

const App = () => {
  return (
    <div className="bg">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/openAi" element={<OpenAi />} />
      </Routes>
    </div>
  );
};

export default App;
