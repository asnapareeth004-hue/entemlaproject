import React from "react";
import "./Stats.css";
import { Link } from "react-router-dom";
const Stats = () => {
  return (
    <div className="stats-container">

      <div className="stat-card total">
        <h2>8742</h2>
        <p>Total Complaints</p>
      </div>

      <div className="stat-card resolved">
        <h2>6245</h2>
        <p>Resolved</p>
      </div>

      <div className="stat-card progress">
        <h2>2152</h2>
        <p>In Progress</p>
      </div>

      <div className="stat-card response">
        <h2>2.4 Days</h2>
        <p>Avg Response</p>
      </div>

      <button className="complaint-btn">
        <Link to="/login">+ File Complaint</Link>
      </button>

    </div>
  );
};

export default Stats;