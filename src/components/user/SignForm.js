import React, { useState, useEffect } from "react";
import "./register.css";
import { loadPopup, loadSuccessPopup } from "../../service/ToastifyPopup";
import axios from "axios";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BASE_URL } from "../../service/UrlUtils";

const SignForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();




  const handleSignIn = async (event) => {
    event.preventDefault();
    let isValid = true;

    if (email === "") {
      loadPopup("Please enter Email");
      isValid = false;
    }

    if (password === "") {
      loadPopup("Please enter Password");
      isValid = false;
    }
    if (isValid) {
      try {
        const response = await axios.post(
          `${BASE_URL}/api/v1/auth/authenticate`,
          { email, password }
        );
        console.log("Sign-in response:", response.data);
        const jwtCookie = document.cookie.split('; ').find((cookie) => cookie.startsWith('jwtToken='));

        // Extract the token value from the cookie
        const jwtToken = jwtCookie ? jwtCookie.split('=')[1] : null;

        console.log('JWT Token:', jwtToken);
        loadSuccessPopup("Sign-in successful");
        sessionStorage.setItem("user", JSON.stringify(response.data));
        navigate("/dashboard");
      } catch (error) {
        console.error("Sign-in error:", error);
        loadPopup("Error signing in");
      }
      setEmail("");
      setPassword("");
    }
  };

  const handleSend = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${BASE_URL}/forgetPassword/${email}`);
      loadSuccessPopup("Password reset email sent successfully ");
    } catch (error) {
      console.error("Error sending password reset email:", error);
      loadPopup("Error sending password reset email");
    }
    setIsForgotPassword(false); // Reset the form after sending the email
    setEmail(""); // Clear the email field
    setIsLoading(false);
  };

  const handleOAuthLogin = (provider) => {
    window.location.href = `https://mpairavat.in/learningPortal/oauth2/authorization/${provider}`;
  };

  useEffect(() => {
    axios.get("https://mpairavat.in/learningPortal/oauthSignin",{ withCredentials: true })
      .then(response => {
        console.log("response.data ===========================>> ", response.data);
        sessionStorage.setItem("user", JSON.stringify(response.data));
        navigate('/dashboard');
      })
      .catch(error => {
        if (error.response) {
          console.error("Error response from server:", error.response.data);
          console.error("Status code:", error.response.status);
        } else if (error.request) {
          console.error("No response received:", error.request);
        } else {
          console.error("Error occurred while fetching user data:", error.message);
        }
      });
  }, [navigate]);

  return (
    <div className="App">
      <h1>Sign In Form</h1>
      <div className="form-container">
        <div className="form">
        <form  onSubmit={handleSignIn}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          {!isForgotPassword && (
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
          {isLoading && <p style={{ textAlign: "center", margin: '5px', color: "#0e5c5f" }}>Sending please wait...</p>}
          <div className="flexbtn">
            {isForgotPassword ? (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                type="button"
                onClick={handleSend}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Email"}
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 500 }}
                type="submit"
              >
                Sign In
              </motion.button>
            )}
            {!isForgotPassword && (
              <>
                not a member?
                <Link to="/register" style={{ textDecoration: "none" }}>
                  Sign Up
                </Link>
              </>
            )}

          </div>
          </form>
          {!isForgotPassword &&(
            <>
          <div className="separator">or login with</div>
          <div className="oauthButtons">
            <button className="oauthButton google" onClick={() => handleOAuthLogin('google')}>
              <FaGoogle className="icon" />
              Login with Google
            </button>
            <button className="oauthButton github" onClick={() => handleOAuthLogin('github')}>
              <FaGithub className="icon" />
              Login with GitHub
            </button>
          </div>
          </>
          )}

          <Link
            to="#"
            style={{
              textDecoration: "none",
              display: "flex",
              justifyContent: "center",
              paddingTop: "31px",
            }}
            onClick={() => setIsForgotPassword(!isForgotPassword)}
          >
            {isForgotPassword ? "Back to Sign In" : "Forget Password?"}
          </Link>
      </div>
    </div>
    </div>
  );
};

export default SignForm;
