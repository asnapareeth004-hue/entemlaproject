import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ setPage }) => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Translate");
  const [authOpen, setAuthOpen] = useState(false);

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

      {/* LOGO */}
      <div className="logo">EnteMLA</div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><button onClick={() => setPage("home")}>Home</button></li>
        <li><button>Complaints</button></li>
        <li><button>Q/A</button></li>
        <li><button>How It Works</button></li>
        <li><button>About</button></li>
        <li><button>Contact</button></li>
      </ul>

      {/* RIGHT SECTION */}
      <div className="right-section">

        {/* 🌐 TRANSLATE */}
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

        {/* 🔔 NOTIFICATION */}
        <button className="bell-btn">🔔</button>

        
<div className="translate-container">
  <button
    className="login"
    onClick={() => setAuthOpen(!authOpen)}
  >
    🔐 Login 
  </button>

    {authOpen && (
      <div className="translate-menu">
        <div onClick={() => setPage("citizen")}>
          👤 Citizen Login
        </div>

        <div onClick={() => setPage("mla")}>
          🏛️ MLA Login
        </div>

        <div onClick={() => setPage("employee")}>
          👨‍💼 Employee Login
        </div>
      </div>
    )}
</div>

        {/* REGISTER */}
        <button className="register">🔐Register</button>

      </div>
    </nav>
  );
};

export default Navbar;