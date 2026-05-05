import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import CitizenDashboard from "./pages/CitizenDashboard";
import Contact from "./pages/Contact";
import About from "./pages/About";
import QA from "./pages/QA";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/qa" element={<QA />} />

          {/* 🔐 PROTECTED ROUTE (CITIZEN ONLY) */}
          <Route
            path="/citizen"
            element={
              <ProtectedRoute role="citizen">
                <CitizenDashboard />
              </ProtectedRoute>
            }
          />

          <Route path="/auth" element={<AuthPage />} />

        </Routes>

      </Router>
    </AuthProvider>
  );
}

export default App;