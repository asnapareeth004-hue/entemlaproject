import React from "react";
import "./Trending.css";

const Trending = () => {
  const issues = [
    {
      title: "Potholes on 5th Main Street",
      status: "High Priority",
      location: "Ward 12",
      image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2"
    },
    {
      title: "Garbage near park",
      status: "Medium",
      location: "Ward 8",
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952"
    },
    {
      title: "Street light not working",
      status: "Pending",
      location: "Ward 5",
      image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231"
    },
    {
      title: "Water leakage issue",
      status: "Resolved",
      location: "Ward 3",
      image: "https://cdn.pixabay.com/photo/2015/08/11/16/18/water-pipe-880975_1280.jpg"
    }
  ];

  return (
    <div className="trending">
      <h2>🔥 Trending Issues</h2>

      <div className="cards">
        {issues.map((issue, index) => (
          <div key={index} className="card">

            {/* Image */}
            <div className="image-container">
              <img src={issue.image} alt="" />

              {/* Status badge */}
              <span className={`badge ${issue.status.toLowerCase().replace(" ", "")}`}>
                {issue.status}
              </span>
            </div>

            {/* Content */}
            <div className="card-content">
              <h4>{issue.title}</h4>
              <p>📍 {issue.location}</p>

              <button>View Details</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;