import React, { useState } from "react";
import "./QA.css";
import Navbar from "../components/home/Navbar";

const QA = () => {
  const [search, setSearch] = useState("");

  const [qaData, setQaData] = useState([
    {
      id: 1,
      question: "How can I submit a complaint?",
      answer:
        "You can submit a complaint through the 'Complaint Portal' by providing details and selecting the category.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 2,
      question: "How long does it take to resolve a complaint?",
      answer:
        "Most complaints are addressed within 48 hours depending on severity and department workload.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
    {
      id: 3,
      question: "Can I track my complaint status?",
      answer:
        "Yes, you can track your complaint using the unique tracking ID provided after submission.",
      likes: 0,
      dislikes: 0,
      comments: [],
    },
  ]);

  const [newQuestion, setNewQuestion] = useState("");

  const handleLike = (id) => {
    setQaData(
      qaData.map((item) =>
        item.id === id ? { ...item, likes: item.likes + 1 } : item
      )
    );
  };

  const handleDislike = (id) => {
    setQaData(
      qaData.map((item) =>
        item.id === id ? { ...item, dislikes: item.dislikes + 1 } : item
      )
    );
  };

  const filteredQA = qaData.filter((item) =>
    item.question.toLowerCase().includes(search.toLowerCase())
  );

  const addQuestion = () => {
    if (!newQuestion.trim()) return;

    const newItem = {
      id: Date.now(),
      question: newQuestion,
      answer: "Your question is under review or will be answered soon.",
      likes: 0,
      dislikes: 0,
      comments: [],
    };

    setQaData([newItem, ...qaData]);
    setNewQuestion("");
  };

  return (
    <div className="qa-page">

      <Navbar />

      {/* HERO */}
      <div className="qa-hero">
        <h1>Community Q / A</h1>
        <p>Find answers to common civic and governance-related questions</p>
      </div>

      {/* SEARCH + ASK */}
      <div className="qa-input-box">

        <div className="ask-box">
          <input
            type="text"
            placeholder="Type your question..."
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />

          <button onClick={addQuestion}>Ask</button>
        </div>

      </div>

      {/* Q/A LIST */}
      <div className="qa-container">

        {filteredQA.map((item) => (
          <div className="qa-card" key={item.id}>

            <h3>❓ {item.question}</h3>

            <p>💬 {item.answer}</p>

            {/* ACTIONS */}
            <div className="qa-actions">


            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default QA;