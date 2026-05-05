import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Translate");

  const handleLanguageChange = (lang) => {
    let label = "Translate";
    if (lang === "en") label = "English";
    if (lang === "ml") label = "Malayalam";
    if (lang === "hi") label = "Hindi";

    setSelectedLang(label);
    setLangOpen(false);
  };

  return (
    <nav className="navbar">

      <div className="logo">EnteMLA</div>

      <ul className="nav-links">
        <li><button>Home</button></li>
        <li><button>Complaints</button></li>
        <li><button>Q/A</button></li>
        <li><button>How It Works</button></li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>

      <div className="right-section">

        {/* 🌐 Translate */}
        <div className="translate-container">
          <button
            className="translate-btn"
            onClick={() => setLangOpen(!langOpen)}
          >
            🌐 {selectedLang} ⌄
          </button>

          {langOpen && (
            <div className="translate-menu">
              <div onClick={() => handleLanguageChange("en")}>English</div>
              <div onClick={() => handleLanguageChange("ml")}>Malayalam</div>
              <div onClick={() => handleLanguageChange("hi")}>Hindi</div>
            </div>
          )}
        </div>

        {/* 🔔 Bell */}
        <button className="bell-btn">🔔</button>

        {/* 🔐 Auth */}
        <button className="login">Login</button>
        <button className="register">Register</button>

      </div>
    </nav>
  );
};

export default Navbar;