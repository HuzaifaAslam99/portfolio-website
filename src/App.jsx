import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Home/Home"
import Skills from "./Skills/Skills"
import Projects from "./Projects/Projects"
import Contact from "./Contact/Contact"



function App() {

  return (
    <Router>
      <body className="w-[100%] h-screen bg-[#141E33] pb-[20px]">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Skills" element={<Skills />}/>
        <Route path="/Projects" element={<Projects />}/>
        <Route path="/Contact"  element={<Contact />}/>
      </Routes>
      </body>
    </Router>
  );
}

export default App;
