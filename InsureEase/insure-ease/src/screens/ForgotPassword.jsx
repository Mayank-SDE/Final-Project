import React, { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetRequest = (e) => {
    e.preventDefault();
    // Implement reset password request logic here
    console.log("Password reset requested for:", email);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Forgot Password</h3>
        <p className="text-muted text-center">
          Enter your email address and we’ll send you a link to reset your password.
        </p>
        <form onSubmit={handleResetRequest}>
          {/* Email Input */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          {/* Reset Button */}
          <button type="submit" className="btn btn-primary w-100">
            Send Reset Link
          </button>
        </form>
        {/* Back to Login */}
        <div className="text-center mt-3">
          <span className="text-muted">Remembered your password? </span>
          <a href="/login" className="text-decoration-none">
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
