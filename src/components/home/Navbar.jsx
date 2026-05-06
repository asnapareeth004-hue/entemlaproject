import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Translate");
  const [authOpen, setAuthOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const loginRef = useRef();
  const registerRef = useRef();
  const langRef = useRef();
  
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setAuthOpen(false);
      }

      if (registerRef.current && !registerRef.current.contains(event.target)) {
        setRegisterOpen(false);
      }

      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
}, []);
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
      <div className="nav-links">
        <button><Link to="/">Home</Link></button>
        <button><Link to="/login">Complaints</Link></button>
        <button><Link to="/qa">Q/A</Link></button>
        <button><Link to="/about">About</Link></button>
        <button><Link to="/complaint">Complaints</Link></button>
        <button><Link to="/qa">Q/A</Link></button>
        <button><Link to="/contact">Contact</Link></button>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        {/* TRANSLATE */}
        <div className="translate-container">
          <button
            className="translate-btn"
            onClick={() => setLangOpen(!langOpen)}
          >
            🌐 {selectedLang} ⌄
          </button>

          {langOpen && (
            <div className="translate-menu" ref={langRef}>
              <div onClick={() => handleLanguageChange("en")}>English</div>
              <div onClick={() => handleLanguageChange("ml")}>Malayalam</div>
              <div onClick={() => handleLanguageChange("hi")}>Hindi</div>
            </div>
          )}
        </div>

        {/* NOTIFICATION */}
        <button className="bell-btn">🔔</button>

        {/* LOGIN DROPDOWN */}
        <div className="translate-container" ref={loginRef}>
          <button
            className="login"
            onClick={() => setAuthOpen(!authOpen)}
          >
            🔐 Login
          </button>

          {authOpen && (
            <div className="translate-menu">
              <Link to="/login"
  onClick={() => localStorage.setItem("role", "citizen")}>👤 Citizen</Link>
              <Link to="/login"
  onClick={() => localStorage.setItem("role", "mla")}>🏛️ MLA</Link>
              <Link to="/login"
  onClick={() => localStorage.setItem("role", "employee")}>👨‍💼 Employee</Link>
            </div>
          )}
        </div>
        
          <div className="translate-container" ref={registerRef}>
          <button
            className="register"
            onClick={() => setRegisterOpen(!registerOpen)}
          >
            🔐 Register
          </button>
          {registerOpen && (
            <div className="translate-menu">
              <Link to="/Register">👤 Citizen</Link>
              <Link to="/register/employee">👨‍💼 Employee</Link>
            </div>
          )}
          </div>
      </div>
    </nav>
  );
};

export default Navbar;