import React, { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import CitizenDashboard from "./pages/CitizenDashboard";

function App() {
  const [page, setPage] = useState("home");
  console.log("CURRENT PAGE:", page);
  return (
    <div className="App">
      {page === "home" && <Home setPage={setPage} />}
      {page === "auth" && <AuthPage setPage={setPage} />}
      {page === "citizen" && <CitizenDashboard />}
    </div>
  );
}

export default App;