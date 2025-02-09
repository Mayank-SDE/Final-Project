import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Home";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const navigate=useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate input fields
    if (!username || !password) {
      toast.error("Please fill out both fields!");
      return;
    }

    // Mock login process (Replace with actual API call)
    console.log("Login Attempt:", { username, password });

    // Example: Success notification
    if(username==="user@user.com" && password==="user")
      {
      toast.success("Logged in successfully!");
      // i will set the type of the user role as user and isLoggedIn true
      navigate("/home");
    }else if(username==="admin@admin.com" && password==="admin"){
      toast.success("Logged in successfully!");
      // i will set the type of the user role as admin and isLoggedIn true
      navigate("/home");
    }else{
      toast.error("Incorrect credentials");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Login</h3>
        <form onSubmit={handleLogin}>
          {/* Username */}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* Forgot Password */}
          <div className="mb-3 text-end">
            <Link to="/forgot-password" className="text-decoration-none">
              Forgot Password?
            </Link>
          </div>
          {/* Login Button */}
          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>
        {/* Divider */}
        <div className="text-center my-3">
          <span className="text-muted">or sign in with</span>
        </div>
        {/* Social Buttons */}
        <div className="d-flex justify-content-around mb-3">
          <button className="btn btn-danger">
            <i className="bi bi-google"></i> Google
          </button>
          <button className="btn btn-primary">
            <i className="bi bi-linkedin"></i> LinkedIn
          </button>
          <button className="btn btn-dark">
            <i className="bi bi-github"></i> GitHub
          </button>
        </div>
        {/* Register Link */}
        <div className="text-center">
          <span className="text-muted">Don’t have an account? </span>
          <Link to="/register" className="text-decoration-none">
            Register Here
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
