import { useNavigate } from "react-router-dom";
import { useState } from "react";
import React from 'react';

export default function LoginPage() {
    const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
  e.preventDefault();

  const role = localStorage.getItem("role");

  const credentials = {
    citizen: {
      email: "citizen@app.com",
      password: "1234",
      route: "/citizen",
    },
    mla: {
      email: "mla@app.com",
      password: "5678",
      route: "/mla",
    },
    employee: {
      email: "employee@app.com",
      password: "9999",
      route: "/employee",
    },
  };

  const user = credentials[role];

  if (!role || !user) {
    alert("Please select role first");
    navigate("/role");
    return;
  }

  // 🔥 REAL AUTH CHECK
  if (email === user.email && password === user.password) {
    navigate(user.route);
  } else {
    alert("Incorrect email or password");
  }
};
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.iconWrap}>
          <span style={styles.icon}>🔒</span>
        </div>
        <h1 style={styles.title}>Welcome back</h1>
        <p style={styles.subtitle}>Please sign in to continue</p>

        <form style={styles.form} onSubmit={handleLogin}  >
          <div style={styles.field}>
            <label style={styles.label}>Email ID</label>
            <input type="email" placeholder="Enter your email" style={styles.input} value={email}
  onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div style={styles.field}>
            <label style={styles.label}>Password</label>
            <input type="password" placeholder="Enter your password" style={styles.input}  value={password}
  onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button type="submit" style={styles.button}>Log In</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #e9f2ff 0%, #f7f0ff 50%, #eefbf6 100%)',
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  },
  card: {
    width: '100%',
    maxWidth: '420px',
    background: 'rgba(255,255,255,0.92)',
    backdropFilter: 'blur(10px)',
    borderRadius: '24px',
    boxShadow: '0 20px 60px rgba(0,0,0,0.12)',
    padding: '36px 30px',
    border: '1px solid rgba(255,255,255,0.7)',
  },
  iconWrap: {
    width: '64px',
    height: '64px',
    borderRadius: '18px',
    background: 'linear-gradient(135deg, #6d7cff, #8b5cf6)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '18px',
    boxShadow: '0 12px 24px rgba(109,124,255,0.35)',
  },
  icon: { fontSize: '28px', color: '#fff' },
  title: {
    margin: '0 0 8px',
    fontSize: '28px',
    fontWeight: 700,
    color: '#1f2937',
  },
  subtitle: {
    margin: '0 0 28px',
    color: '#6b7280',
    fontSize: '15px',
  },
  form: { display: 'grid', gap: '18px' },
  field: { display: 'grid', gap: '8px' },
  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: '#374151',
  },
  input: {
    height: '48px',
    borderRadius: '14px',
    border: '1px solid #dbe3f0',
    outline: 'none',
    padding: '0 16px',
    fontSize: '15px',
    background: '#fff',
    boxShadow: '0 1px 2px rgba(16,24,40,0.04) inset',
  },
  button: {
    marginTop: '6px',
    height: '50px',
    border: 'none',
    borderRadius: '14px',
    background: 'linear-gradient(135deg, #4f46e5, #7c3aed)',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 700,
    cursor: 'pointer',
    boxShadow: '0 14px 28px rgba(79,70,229,0.28)',
  },
};