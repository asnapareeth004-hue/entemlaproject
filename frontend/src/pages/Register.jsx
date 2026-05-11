import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    otp: "",
    email: "",
    emailOtp: "",
    place: "",
    password: "",
    confirmPassword: ""
  });

  const [otpSent, setOtpSent] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);

  const [phoneTimer, setPhoneTimer] = useState(30);
  const [emailTimer, setEmailTimer] = useState(30);

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);

  const [phoneMsg, setPhoneMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Phone OTP
  const sendPhoneOtp = () => {
    if (!form.phone) return alert("Enter phone number");

    setOtpSent(true);
    let count = 30;

    const interval = setInterval(() => {
      count--;
      setPhoneTimer(count);
      if (count === 0) clearInterval(interval);
    }, 1000);
  };

  // Email OTP
  const sendEmailOtp = () => {
    if (!form.email) return alert("Enter email");

    setEmailOtpSent(true);
    let count = 30;

    const interval = setInterval(() => {
      count--;
      setEmailTimer(count);
      if (count === 0) clearInterval(interval);
    }, 1000);
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!phoneVerified || !emailVerified) {
      alert("Verify phone and email first");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setShowPopup(true);
    console.log(form);
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h2>Create Account </h2>
        <p>Track complaints easily and stay updated</p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <div className="input-group">
            <span>👤</span>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="otp-group">
            <div className="input-group">
              <span>📱</span>
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
              />
            </div>
            <button type="button" className="otp-btn" onClick={sendPhoneOtp}>
              {otpSent ? "Resend" : "Send OTP"}
            </button>
          </div>

          {otpSent && (
            <div className="otp-box">
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                onChange={handleChange}
              />
              <button
                type="button"
                className="verify-btn"
                onClick={() => {
                  if (form.otp === "1234") {
                    setPhoneVerified(true);
                    setPhoneMsg("✔ Phone Verified");
                  } else {
                    setPhoneVerified(false);
                    setPhoneMsg("✖ Invalid OTP");
                  }
                }}
              >
                Verify
              </button>
              <p className={phoneVerified ? "success" : "error"}>
                {phoneMsg}
              </p>
              <small>{phoneTimer}s remaining</small>
            </div>
          )}

          {/* Email */}
          <div className="otp-group">
            <div className="input-group">
              <span>📧</span>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
            </div>
            <button type="button" className="otp-btn" onClick={sendEmailOtp}>
              {emailOtpSent ? "Resend" : "Send OTP"}
            </button>
          </div>

          {emailOtpSent && (
            <div className="otp-box">
              <input
                type="text"
                name="emailOtp"
                placeholder="Enter Email OTP"
                onChange={handleChange}
              />
              <button
                type="button"
                className="verify-btn"
                onClick={() => {
                  if (form.emailOtp === "1234") {
                    setEmailVerified(true);
                    setEmailMsg("✔ Email Verified");
                  } else {
                    setEmailVerified(false);
                    setEmailMsg("✖ Invalid OTP");
                  }
                }}
              >
                Verify
              </button>
              <p className={emailVerified ? "success" : "error"}>
                {emailMsg}
              </p>
              <small>{emailTimer}s remaining</small>
            </div>
          )}

          {/* Place */}
          <div className="input-group">
            <span>📍</span>
            <input
              type="text"
              name="place"
              placeholder="Your Location"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="input-group">
            <span>🔒</span>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span
              className="eye"
              onClick={() => setShowPassword(!showPassword)}
            >
              👁
            </span>
          </div>

          {/* Confirm Password */}
          <div className="input-group">
            <span>🔑</span>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="register-btn">
            Create Account
          </button>

        </form>

        {/* Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h2>Registration Successful!</h2>
              <p>Your account has been created successfully.</p>
              <button
                onClick={() => {
                  setShowPopup(false);
                  navigate("/");
                }}
              >
                Continue
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Register;