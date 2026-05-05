import React from "react";
import "./Contact.css";
import Navbar from "../components/home/Navbar";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-page">

      <Navbar />

      {/* HERO */}
      <div className="contact-hero">
        <div className="hero-content">
          <h1>Citizen–Government Communication Portal</h1>
          <p>
            A transparent system connecting citizens with MLA office and all key government departments.
          </p>

          <div className="hero-badges">
            <span>📍 Kochi Constituency</span>
            <span>⚡ 48H Response System</span>
            <span>🔒 Verified Network</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="contact-container">

        {/* LEFT */}
        <div className="left-panel">

          <h2 className="section-title">Citizen Access</h2>

          <div className="action-card">

            <div className="icon">🚨</div>

            <div>
              <h3>Report Civic Issue</h3>
              <p>
                File official complaints related to infrastructure, safety, and public services.
              </p>

              <button onClick={() => navigate("/complaint/new")}>
                Submit Complaint →
              </button>
            </div>

          </div>

          <div className="action-card ">

            <div className="icon">📦</div>

            <div>
              <h3>Track Complaint</h3>
              <p>
                View live status updates using your tracking ID.
              </p>

              <button onClick={() => navigate("/complaint/track")}>
                Track Status →
              </button>
            </div>

          </div>

        </div>

        {/* RIGHT */}
        <div className="right-panel">

          <h2 className="section-title">Government Directory</h2>

          {/* MLA CARD */}
          <div className="mla-card">

            <div className="mla-header">
              <span>🏛️</span>
              <h3>MLA Office</h3>
            </div>

            <p><b>Location:</b> Kochi Constituency Office</p>
            <p><b>Phone:</b> +91 99999 99999</p>
            <p><b>Email:</b> mla.office@example.com</p>
            <p><b>Hours:</b> 10:00 AM – 5:00 PM</p>

          </div>

          {/* DEPARTMENTS GRID */}
          <div className="dept-grid">
            <div className="dept-card">
                <h4>🛣️ Public Works Department (PWD)</h4>
                <p>Roads, bridges, infrastructure maintenance</p>
                <p>📍 Civil Station, Kochi</p>
                <p>📞 +91 1111111111</p>
                <p>✉️ pwd.kochi@gov.in</p>
                <p>🕒 Mon–Fri: 10 AM – 5 PM</p>
            </div>

            <div className="dept-card">
                <h4>💧 Water Supply & Sanitation</h4>
                <p>Drinking water, drainage issues</p>
                <p>📍 Water Authority Office, Kochi</p>
                <p>📞 +91 2222222222</p>
                <p>✉️ water.kochi@gov.in</p>
                <p>🕒 Mon–Fri: 9 AM – 4 PM</p>
            </div>

            <div className="dept-card">
                <h4>⚡ Electricity Board</h4>
                <p>Power supply, outages, maintenance</p>
                <p>📍 KSEB Regional Office, Kochi</p>
                <p>📞 +91 3333333333</p>
                <p>✉️ electricity.kochi@gov.in</p>
                <p>🕒 24x7 Emergency Support</p>
            </div>

            <div className="dept-card">
                <h4>🏥 Health & Welfare</h4>
                <p>Hospitals, medical assistance</p>
                <p>📍 District Health Office, Ernakulam</p>
                <p>📞 +91 4444444444</p>
                <p>✉️ health.kochi@gov.in</p>
                <p>🕒 Mon–Sat: 9 AM – 6 PM</p>
            </div>

            <div className="dept-card">
                <h4>🏫 Education Department</h4>
                <p>Schools, scholarships, student support</p>
                <p>📍 Education Office, Ernakulam</p>
                <p>📞 +91 5555555555</p>
                <p>✉️ education.kochi@gov.in</p>
                <p>🕒 Mon–Fri: 10 AM – 5 PM</p>
            </div>

            <div className="dept-card">
                <h4>🚓 Local Administration</h4>
                <p>Public services, civic management</p>
                <p>📍 Collectorate Office, Kochi</p>
                <p>📞 +91 6666666666</p>
                <p>✉️ admin.kochi@gov.in</p>
                <p>🕒 Mon–Fri: 10 AM – 5 PM</p>
            </div>

            </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;