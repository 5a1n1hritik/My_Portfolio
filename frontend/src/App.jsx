import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import SkillsSection from "./components/SkillsSection";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer/>
        <ScrollToTopButton/>
      </>
    </Router>
  );
};

export default App;
