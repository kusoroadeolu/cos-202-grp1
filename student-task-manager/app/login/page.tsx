"use client";

import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle login logic here
    console.log("Login attempt:", { email, password });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        {/* Logo */}
        <div style={styles.logoBox}>
          🎓
        </div>

        {/* Header */}
        <h1 style={styles.title}>Log In to Serene</h1>

        <p style={styles.subtitle}>
          Log in to your focused workspace
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} style={styles.form}>

          {/* Email */}
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>
              Institutional Email
            </label>

            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="scholar@university.edu"
              style={styles.input}
            />
          </div>

          {/* Password */}
          <div style={styles.inputGroup}>
            <div style={styles.passwordHeader}>
              <label htmlFor="password" style={styles.label}>
                Security Key
              </label>

              <a href="#" style={styles.forgot}>
                Forgot?
              </a>
            </div>

            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              style={styles.input}
            />
          </div>

          {/* Remember */}
          <div style={styles.rememberContainer}>
            <input type="checkbox" style={styles.checkbox} />

            <p style={styles.rememberText}>
              Stay centered in this session
            </p>
          </div>

          {/* Login Button */}
          <button type="submit" style={styles.button}>
            Sign In →
          </button>

        </form>

        {/* Divider */}
        <div style={styles.dividerContainer}>
          <div style={styles.line}></div>

          <p style={styles.dividerText}>
            or continue with
          </p>

          <div style={styles.line}></div>
        </div>

        {/* Social Buttons */}
        <div style={styles.socialContainer}>
          <button style={styles.socialButton}>
            Google
          </button>

          <button style={styles.socialButton}>
            Uni-Portal
          </button>
        </div>

        {/* Sign Up */}
        <p style={styles.signupText}>
          New scholar?{" "}

          <a href="/sign-up" style={styles.signupLink}>
            Join the sanctuary
          </a>
        </p>

      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Serene Study Systems. Built to manage your tasks.
      </footer>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundColor: "#edf2f7",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "520px",
    padding: "50px",
    borderRadius: "35px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
  },

  logoBox: {
    width: "80px",
    height: "80px",
    margin: "0 auto",
    backgroundColor: "#5b9df9",
    borderRadius: "25px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "35px",
  },

  title: {
    textAlign: "center" as const,
    marginTop: "25px",
    fontSize: "42px",
    fontWeight: "bold",
    color: "#07152a",
  },

  subtitle: {
    textAlign: "center" as const,
    marginTop: "15px",
    color: "#555",
    fontSize: "20px",
    marginBottom: "35px",
  },

  form: {
    display: "flex",
    flexDirection: "column" as const,
    gap: "25px",
  },

  inputGroup: {
    display: "flex",
    flexDirection: "column" as const,
  },

  label: {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#222",
  },

  input: {
    padding: "18px",
    borderRadius: "22px",
    border: "none",
    backgroundColor: "#edf4fc",
    fontSize: "18px",
    outline: "none",
  },

  passwordHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  forgot: {
    color: "#1565c0",
    textDecoration: "none",
    fontWeight: "600",
  },

  rememberContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },

  checkbox: {
    width: "18px",
    height: "18px",
  },

  rememberText: {
    color: "#444",
    fontSize: "17px",
  },

  button: {
    marginTop: "10px",
    padding: "18px",
    borderRadius: "22px",
    border: "none",
    backgroundColor: "#005eb8",
    color: "white",
    fontSize: "24px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  dividerContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginTop: "40px",
  },

  line: {
    flex: 1,
    height: "1px",
    backgroundColor: "#d1d5db",
  },

  dividerText: {
    color: "#666",
    fontSize: "15px",
  },

  socialContainer: {
    display: "flex",
    gap: "15px",
    marginTop: "25px",
  },

  socialButton: {
    flex: 1,
    padding: "16px",
    borderRadius: "18px",
    border: "none",
    backgroundColor: "#edf4fc",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
  },

  signupText: {
    textAlign: "center" as const,
    marginTop: "35px",
    fontSize: "18px",
    color: "#444",
  },

  signupLink: {
    color: "#005eb8",
    textDecoration: "none",
    fontWeight: "bold",
  },

  footer: {
    marginTop: "35px",
    textAlign: "center" as const,
    color: "#444",
    fontSize: "16px",
  },
};

export default Login;