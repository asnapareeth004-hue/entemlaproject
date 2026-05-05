import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, login, logout } = useAuth();

  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("Translate");
  const [authOpen, setAuthOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

  const loginRef = useRef();
  const registerRef = useRef();
  const langRef = useRef(); // ✅ now used properly

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
        <Link to="/">Home</Link>

        {/* citizen-only links */}
        {user?.role === "citizen" && (
          <>
            <Link to="/citizen">My Complaints</Link>
            <Link to="/track">Track Complaint</Link>
          </>
        )}

        <Link to="/qa">Q/A</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="right-section">

        {/* 🌐 LANGUAGE */}
        <div className="translate-container" ref={langRef}>
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

        {/* 🔐 AUTH SECTION */}
        {!user ? (
          <>
            {/* LOGIN */}
            <div className="translate-container" ref={loginRef}>
              <button
                className="login"
                onClick={() => setAuthOpen(!authOpen)}
              >
                🔐 Login
              </button>

              {authOpen && (
                <div className="translate-menu">
                  <Link onClick={() => login("citizen")}>👤 Citizen</Link>
                  <Link onClick={() => login("mla")}>🏛️ MLA</Link>
                  <Link onClick={() => login("employee")}>👨‍💼 Employee</Link>
                </div>
              )}
            </div>

            {/* REGISTER */}
            <div className="translate-container" ref={registerRef}>
              <button
                className="register"
                onClick={() => setRegisterOpen(!registerOpen)}
              >
                🔐 Register
              </button>

              {registerOpen && (
                <div className="translate-menu">
                  <Link to="/register/citizen">👤 Citizen</Link>
                  <Link to="/register/employee">👨‍💼 Employee</Link>
                </div>
              )}
            </div>
          </>
        ) : (
          /* 👤 PROFILE SECTION */
          <div className="profile">
            <span>👤 {user.name}</span>
            <button onClick={logout}>Logout</button>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;