import React from "react";
import "./About.css";
import Navbar from "../components/home/Navbar";
import bgImage from "../assets/bg2.png";
const About = () => {
  return (
    <div className="about-page">

      <Navbar />

      {/* HERO */}
      <div className="about-hero">
        <h1>About Ente MLA</h1>
        <p>
          A transparent digital platform connecting citizens with their elected representative.
        </p>
      </div>
      
      {/* CONTENT */}
      <div className="about-container">

        {/* MLA SECTION */}
        <div className="about-card">
          <h2>👤 About the EnteMLA</h2>
          <p>
            Ente MLA is a civic grievance management platform designed to improve communication
            between citizens and their elected MLA. It enables structured complaint tracking,
            faster response, and accountability in governance.
          </p>
        </div>

        {/* MLA SECTION */}
        <div className="about-card">

        <h2>👤 About the MLA</h2>

        <div className="mla-profile">

            <div className="mla-avatar">
            🏛️
            </div>

            <div className="mla-info">
            <h3>Hon. MLA – Kochi Constituency</h3>

            <p>
                The elected representative of Kochi Constituency responsible for addressing
                public grievances, development initiatives, and policy implementation at the local level.
            </p>

            <div className="mla-details">
                <p>📍 Constituency: Kochi</p>
                <p>📞 Office: +91 99999 99999</p>
                <p>✉️ Email: mla.office@example.com</p>
                <p>🕒 Office Hours: 10:00 AM – 5:00 PM</p>
            </div>

            </div>

        </div>

        </div>
        {/* WHY THIS SYSTEM */}
        <div className="about-card">
          <h2>🎯 Why This System?</h2>

          <ul>
            <li>Reduce delay in complaint resolution</li>
            <li>Improve transparency between citizens and government</li>
            <li>Provide real-time tracking of grievances</li>
            <li>Ensure department-level accountability</li>
          </ul>

          <p>
            Traditional complaint systems are often slow and untracked.
            This platform solves that problem using digital workflow management.
          </p>
        </div>

        {/* HOW IT WORKS */}
        <div className="about-card">
          <h2>⚙️ How It Works</h2>

          <div className="steps">

            <div className="step">
              <span>1</span>
              <div>
                <h4>Submit Complaint</h4>
                <p>Citizen submits issue with details and category.</p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div>
                <h4>Auto Department Routing</h4>
                <p>System assigns complaint to relevant department.</p>
              </div>
            </div>

            <div className="step">
              <span>3</span>
              <div>
                <h4>Tracking & Updates</h4>
                <p>User receives real-time status updates.</p>
              </div>
            </div>

            <div className="step">
              <span>4</span>
              <div>
                <h4>Resolution</h4>
                <p>Complaint is resolved and marked completed.</p>
              </div>
            </div>

          </div>
        </div>

        {/* VISION */}
        <div className="about-card">
          <h2>🌍 Our Vision</h2>
          <p>
            To build a transparent, efficient, and accessible governance system where every
            citizen's voice is heard and acted upon without delay.
          </p>
        </div>
        <div className="about-image-section">
          <img src={bgImage} alt="MLA Platform" />
        </div>

      </div>
    </div>
  );
};

export default About;