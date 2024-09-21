import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { loadPopup, loadSuccessPopup } from "../../service/ToastifyPopup";
import axios from "axios";
import "../user/register.css";
import { BASE_URL } from "../../service/UrlUtils";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");


  const isEmailDisabled = !!email; // Disable email field if email is provided

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match");
      return;
    }
 console.log(email+" "+otp+" "+newPassword)

 try {
      const response = await axios.post(`${BASE_URL}/updatePassword`, {
        email,
        newPassword,
        otp,
      });
      if (response.data) {
        loadSuccessPopup("Password updated successfully");
        // Reset form fields
        setEmail("");
        setNewPassword("");
        setConfirmPassword("");
        setOtp("");
      } else {
        setError("Invalid OTP or email");
      }
    } catch (error) {
      console.error("Error updating password:", error);
      setError("Error updating password");
    }
  };

  return (
    <div className="App">
      <h1>Forget Password ?</h1>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isEmailDisabled} // Disable email field based on isEmailDisabled state
            />
          </div>
          {/* Render other form fields */}
          <div className="form-group">
            <label>New Password:</label>
            <input
              type="password"
              autoComplete="off"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password:</label>
            <input
              type="password"
              autoComplete="off"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>OTP:</label>
            <input
              type="text"
              value={otp}
              autoComplete="off"
              onChange={(e) => setOtp(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <div className="flexbtn">
            <motion.button
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 500 }}
              type="submit"
            >
              Submit
            </motion.button>
            <Link to="/#contact" style={{ textDecoration: "none" }}>
              Back to Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
