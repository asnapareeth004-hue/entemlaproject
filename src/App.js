import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import QA from "./pages/QA";
import Complaint from "./pages/Complaint";

function App() {
  return (
    <Router>
      <div className="App">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/QA" element={<QA />} />
          <Route path="/Complaint" element={<Complaint />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;