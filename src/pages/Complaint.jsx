import React, { useState } from "react";
import "./Complaint.css";
import Navbar from "../components/home/Navbar";

const complaints = [
  {
    id: 1,
    title: "Street Light Failure - Ward 5",
    status: "In Progress",
    priority: "High",
    progress: 60,
    expectedDate: "2026-05-10",
    description: "Street light not working for 2 weeks.",
    updates: ["Reported", "Inspection done", "Repair ongoing"],
  },
  {
    id: 2,
    title: "Water Leakage - Main Road",
    status: "Resolved",
    priority: "High",
    resolvedDate: "2026-04-28",
    description: "Major pipeline leakage fixed.",
    updates: ["Reported", "Fixed", "Verified"],
  },
  {
    id: 3,
    title: "Garbage Accumulation - Colony",
    status: "Pending",
    priority: "Medium",
    expectedDate: "2026-05-08",
    description: "Waste not collected for 4 days.",
    updates: ["Complaint registered"],
  },
  {
    id: 4,
    title: "Damaged Road - School Zone",
    status: "In Progress",
    priority: "High",
    progress: 45,
    expectedDate: "2026-05-12",
    description: "Potholes causing accidents.",
    updates: ["Survey done", "Work assigned"],
  },
  {
    id: 5,
    title: "Drainage Blockage - Flood Risk",
    status: "In Progress",
    priority: "High",
    progress: 75,
    expectedDate: "2026-05-06",
    description: "Severe waterlogging during rain.",
    updates: ["Cleaning started", "Partial clearance"],
  },
  {
    id: 6,
    title: "Stray Dog Issue",
    status: "Pending",
    priority: "Medium",
    expectedDate: "2026-05-15",
    description: "Stray dogs causing safety issues.",
    updates: ["Forwarded to department"],
  },
  {
    id: 7,
    title: "School Water Supply Fixed",
    status: "Resolved",
    priority: "High",
    resolvedDate: "2026-04-20",
    description: "Water purifier replaced successfully.",
    updates: ["Reported", "Replaced", "Verified"],
  },
];

const ComplaintsList = () => {
  const [selected, setSelected] = useState(null);

  const stats = {
    total: complaints.length,
    pending: complaints.filter(c => c.status === "Pending").length,
    progress: complaints.filter(c => c.status === "In Progress").length,
    resolved: complaints.filter(c => c.status === "Resolved").length,
  };

  return (
    <div className="page-wrapper">
      <Navbar />

      <div className="control-dashboard">

        {/* 🧭 HEADER PANEL */}
        <div className="header">
          <h1>📊 Complaint Control Dashboard</h1>
          <p>Grievance Monitoring & Resolution System</p>

          <div className="stats">
            <div>📌 Total <b>{stats.total}</b></div>
            <div className="warn">⏳ Pending <b>{stats.pending}</b></div>
            <div className="process">🔄 In Progress <b>{stats.progress}</b></div>
            <div className="done">✅ Resolved <b>{stats.resolved}</b></div>
          </div>
        </div>

        {/* 🧱 MAIN BODY */}
        <div className="body">

          {/* 📂 LEFT QUEUE */}
          <div className="queue">
            <h3>📂 Complaint Queue</h3>

            {complaints.map(c => (
              <div
                key={c.id}
                className={`item ${selected?.id === c.id ? "active" : ""}`}
                onClick={() => setSelected(c)}
              >
                <div>
                  <strong>{c.title}</strong>
                  <span>{c.status} • {c.priority}</span>
                </div>

                <div className={`dot ${c.status.toLowerCase().replace(" ", "-")}`} />
              </div>
            ))}
          </div>

          {/* 📄 RIGHT CASE FILE */}
          <div className="file">

            {!selected ? (
              <div className="empty">
                Select a complaint to open case file
              </div>
            ) : (
              <div className="case-file">

                <h2>📁 Case File</h2>

                <div className="section">
                  <h4>Overview</h4>
                  <p>{selected.description}</p>
                </div>

                <div className="section">
                  <h4>Status</h4>
                  <p>{selected.status}</p>
                  <p>{selected.priority} Priority</p>
                </div>

                {selected.progress && (
                  <div className="section">
                    <h4>Progress</h4>
                    <div className="bar">
                      <div style={{ width: `${selected.progress}%` }} />
                    </div>
                    <small>{selected.progress}% completed</small>
                  </div>
                )}

                <div className="section">
                  <h4>Timeline</h4>
                  <ul>
                    {selected.updates.map((u, i) => (
                      <li key={i}>✔ {u}</li>
                    ))}
                  </ul>
                </div>

                <div className="section">
                  <h4>Resolution Info</h4>
                  {selected.expectedDate && (
                    <p>Expected: {selected.expectedDate}</p>
                  )}
                  {selected.resolvedDate && (
                    <p>Resolved: {selected.resolvedDate}</p>
                  )}
                </div>

                <button onClick={() => setSelected(null)}>
                  Close Case
                </button>

              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplaintsList;