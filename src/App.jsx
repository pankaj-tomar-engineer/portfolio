import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./screens/Home";
import NotFound from "./screens/NotFound";
import Projects from "./screens/Projects";
import About from "./screens/About";
import AppHeader from "./components/AppHeader";
import Footer from "./components/Footer";
import Experience from "./screens/Experience";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Contact from "./screens/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <AppHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/education" element={<Education />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
