import React from "react";
import "./Stats.css";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import { useNavigate } from "react-router-dom";

>>>>>>> 2d7de2793d5ea19fd454ef49f9397cb7a7a1cdc7
const Stats = () => {
  const navigate = useNavigate();
  return (
    <div className="stats-container">

      
      

<<<<<<< HEAD
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
=======
      <button className="complaint-btn" onClick={() => navigate("/login")}>
        + File Complaint
>>>>>>> 2d7de2793d5ea19fd454ef49f9397cb7a7a1cdc7
      </button>

    </div>
  );
};

export default Stats;