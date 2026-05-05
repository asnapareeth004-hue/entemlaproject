import React from "react";
import "./Hero.css";
import mlaImage from "../../assets/mla.jpg";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="hero">

      {/* LEFT */}
      <div className="hero-left">

        {/* 🔥 MAIN HERO TEXT */}
        <div className="hero-intro">
          <h1>
            Your Voice. <span>Real Change.</span>
          </h1>
          <p>
            Report issues, track progress, and stay connected with your MLA —
            all in one transparent platform.
          </p>
        </div>

        {/* 👤 MLA CARD */}
        <div className="mla-card">

          <div className="mla-top">
            <div className="mla-image">
              <img src={mlaImage} alt="MLA" />
            </div>

            <div className="mla-content">
              <h2>MLA Name</h2>
              <p className="mla-details">🎓 Qualification </p>
              <p className="mla-details">📍 Place</p>
              <p className="mla-desc">
                Focused on delivering fast and transparent public services.
              </p>
            </div>
          </div>

          {/* STATS */}
          <div className="hero-stats">
            <div><h3>320+</h3><p>Projects</p></div>
            <div><h3>12.5K+</h3><p>Citizens</p></div>
            <div><h3>98%</h3><p>Efficiency</p></div>
          </div>

          {/* BUTTON */}
          <button className="primary-btn"
            onClick={() => navigate("/about")}
          >
            About Us →
          </button>

        </div>
      </div>

      {/* RIGHT */}
      <div className="hero-right">

        <div className="info-box highlight">
          <h3>📍 Constituency</h3>
          <p>Greenfield Constituency</p>
          <p>🕒 9 AM – 5 PM</p>
          <p className="promise">
            All complaints resolved within 48 hours
          </p>
        </div>

        <div className="info-box highlight">
          <h3>🚧 Live Updates</h3>
          <ul>
            <li>✔ Road repair completed</li>
            <li>✔ Park inaugurated</li>
          </ul>
        </div>

        <div className="info-box highlight">
          <h3>📢 Recent Issues</h3>
          <ul>
            <li>Street light - <span className="pending">Pending</span></li>
            <li>Water issue - <span className="resolved">Resolved</span></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Hero;