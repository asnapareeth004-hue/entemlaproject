import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <h2>EnteMLA</h2>
          <p>
            Empowering citizens to report issues, track progress,
            and stay connected with their representatives.
          </p>
        </div>

        {/* MIDDLE LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Complaints</li>
            <li>Q/A</li>
            <li>About</li>
          </ul>
        </div>

        {/* RIGHT CONTACT */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📍 Ernakulam, Kerala, India</p>
          <p>📧 support@entemla.com</p>
          <p>📞 +91 9999999999</p>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>EnteMLA</p>
      </div>

    </footer>
  );
};

export default Footer;