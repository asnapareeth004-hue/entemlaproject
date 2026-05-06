import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
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

  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(false);
  const [emailOtpSent, setEmailOtpSent] = useState(false);

  const [phoneTimer, setPhoneTimer] = useState(30);
  const [emailTimer, setEmailTimer] = useState(30);

  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const [phoneVerified, setPhoneVerified] = useState(false);
  const [emailVerified, setEmailVerified] = useState(false);
  
  const [phoneMsg, setPhoneMsg] = useState("");
  const [emailMsg, setEmailMsg] = useState("");
  // ✅ Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📱 Send Phone OTP
  const sendPhoneOtp = () => {
    if (!form.phone) {
      alert("Enter phone number");
      return;
    }

    setOtpSent(true);
    let count = 30;

    const interval = setInterval(() => {
      count--;
      setPhoneTimer(count);

      if (count === 0) clearInterval(interval);
    }, 1000);
  };

  // 📧 Send Email OTP
  const sendEmailOtp = () => {
    if (!form.email) {
      alert("Enter email");
      return;
    }

    setEmailOtpSent(true);
    let count = 30;

    const interval = setInterval(() => {
      count--;
      setEmailTimer(count);

      if (count === 0) clearInterval(interval);
    }, 1000);
  };

  // ✅ Submit form (ONLY ONE FUNCTION)
  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    setShowPopup(true); // ✅ show popup
    console.log("Form Data:", form);
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <h2>Create Your Account</h2>
        <p>Fill in the details below to get started</p>

        <form onSubmit={handleSubmit}>

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          {/* 📱 Phone */}
          <div className="phone-row">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              required
            />
            <button type="button" onClick={sendPhoneOtp}>
              {otpSent ? "Resend" : "Send OTP"}
            </button>
          </div>

          {/* Phone OTP */}
          {otpSent && (
            <>
                <div className="phone-row">
                <input
                    type="text"
                    name="otp"
                    placeholder="Enter Phone OTP"
                    onChange={handleChange}
                />
                <button
                    type="button"
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
                </div>

                <p className={`otp-msg ${phoneVerified ? "success" : "error"}`}>
                {phoneMsg}
                </p>

                <p className="timer">Time left: {phoneTimer}s</p>
            </>
            )}

          {/* 📧 Email */}
          <div className="phone-row">
            <input
              type="email"
              name="email"
              placeholder="Email ID (optional)"
              onChange={handleChange}
            />
            <button type="button" onClick={sendEmailOtp}>
              {emailOtpSent ? "Resend" : "Send OTP"}
            </button>
          </div>

          {/* Email OTP */}
          {emailOtpSent && (
            <>
                <div className="phone-row">
                <input
                    type="text"
                    name="emailOtp"
                    placeholder="Enter Email OTP"
                    onChange={handleChange}
                />
                <button
                    type="button"
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
                </div>

                <p className={`otp-msg ${emailVerified ? "success" : "error"}`}>
                {emailMsg}
                </p>

                <p className="timer">Time left: {emailTimer}s</p>
            </>
            )}

          {/* Place */}
          <input
            type="text"
            name="place"
            placeholder="Place / City"
            onChange={handleChange}
            required
          />

          {/* Password */}
          <div className="password-row">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleChange}
              required
            />
            <span onClick={() => setShowPassword(!showPassword)}>
              👁
            </span>
          </div>

          {/* Confirm Password */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          {/* Submit */}
          <button type="submit" className="register-btn">
            Register
          </button>
        </form>

        {/* ✅ Popup OUTSIDE form */}
        {showPopup && (
          <div className="popup-overlay">
            <div className="popup">
              <h2> Registration Successful!</h2>
              <p>Your account has been created successfully.</p>
              <button onClick={() => {setShowPopup(false);
                navigate("/");
              }}>
                OK
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Register;