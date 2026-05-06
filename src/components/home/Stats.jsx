import React from "react";
import "./Stats.css";
import { useNavigate } from "react-router-dom";

const Stats = () => {
  const navigate = useNavigate();
  return (
    <div className="stats-container">

      
      

      <button className="complaint-btn" onClick={() => navigate("/login")}>
        + File Complaint
      </button>

    </div>
  );
};

export default Stats;