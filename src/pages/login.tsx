import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";


export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://winacademy-backend.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

   if (!response.ok) {
  setError(data.error || "Login failed.");
} else {
  setSuccess(data.message || "Login successful.");

  // Save token to localStorage
  localStorage.setItem("token", data.token);

  // Redirect to MyProfile page
  navigate("/courses");
}

    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    fontSize: 16,
    borderRadius: 12,
    border: "1.5px solid rgba(255, 255, 255, 0.3)",
    backgroundColor: "rgba(255, 255, 255, 0.25)",
    color: "#0d71ff",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    boxSizing: "border-box",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
  };

  const inputWrapperStyle = { marginBottom: 16 };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #a8edea, #fed6e3)",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: 16,
        boxSizing: "border-box",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "rgba(255, 255, 255, 0.25)",
          borderRadius: 20,
          padding: 24,
          width: "clamp(320px, 90vw, 480px)",
          boxShadow: "0 8px 32px rgba(31, 38, 135, 0.37)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          backdropFilter: "blur(8px)",
          WebkitBackdropFilter: "blur(8px)",
          color: "#0d71ff",
          boxSizing: "border-box",
        }}
        noValidate
      >
        <Link
          to="/"
          style={{
            color: "#084bb8",
            fontWeight: "700",
            textDecoration: "none",
            display: "inline-block",
            marginBottom: "1.5rem",
          }}
        >
          &larr; Back to Home
        </Link>
        <h2
          style={{
            textAlign: "center",
            marginBottom: 24,
            fontWeight: 700,
            fontSize: 28,
            letterSpacing: 4,
            color: "#0d71ff",
            textShadow: "0 0 5px rgba(13,81,255,0.7)",
          }}
        >
          Login
        </h2>

        {error && (
          <div style={{ color: "red", marginBottom: 16 }} role="alert">
            {error}
          </div>
        )}
        {success && (
          <div style={{ color: "green", marginBottom: 16 }} role="alert">
            {success}
          </div>
        )}

        <div style={inputWrapperStyle}>
          <label htmlFor="email" style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <div style={inputWrapperStyle}>
          <label htmlFor="password" style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password"
            required
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          disabled={!formData.email || !formData.password || loading}
          style={{
            width: "100%",
            padding: 16,
            fontSize: 18,
            borderRadius: 50,
            border: "none",
            color: "white",
            backgroundColor: "#0d71ff",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 0 20px #197bf4",
            transition: "background-color 0.3s ease, box-shadow 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#1966d2";
            e.currentTarget.style.boxShadow = "0 0 30px #1966d2";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#0d71ff";
            e.currentTarget.style.boxShadow = "0 0 20px #197bf4";
          }}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p style={{ marginTop: 16, textAlign: "center", color: "#0d71ff", fontWeight: 600 }}>
          New User?{" "}
          <Link to="/register" style={{ color: "#0846b3", textDecoration: "none" }}>
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
