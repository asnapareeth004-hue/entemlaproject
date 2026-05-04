import React, { useState } from "react";
import RoleSelector from "../components/auth/RoleSelector";

const AuthPage = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [mode, setMode] = useState("login");

  return (
    <div className="auth-layout">
      
      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Home Page Area</h1>
        <p>This is for your friend</p>
        </div>
        <div className="auth-right">
         <h2>Select role</h2>
         

      

        <RoleSelector
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
        />

        {selectedRole && (
          <div className="auth-box">
            <div className="toggle-buttons">
              <button
                className={mode === "login" ? "active" : ""}
                onClick={() => setMode("login")}
              >
                Login
              </button>

              <button
                className={mode === "register" ? "active" : ""}
                onClick={() => setMode("register")}
              >
                Register
              </button>
            </div>

            <h4>
              {mode === "login"
                ? `Login as ${selectedRole}`
                : `Register as ${selectedRole}`}
            </h4>
          </div>
        )}
      </div>

      

    </div>
  );
};

export default AuthPage;