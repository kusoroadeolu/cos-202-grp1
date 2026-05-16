"use client";

import React, { useState } from "react";

function Signup() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        console.log("Full Name:", fullName);
        console.log("Email:", email);
        console.log("Password:", password);
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>

                {/* Header */}
                <h1 style={styles.title}>Welcome to SERENE</h1>

                <p style={styles.subtitle}>
                    Login to your focused workspace.
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} style={styles.form}>

                    {/* Full Name */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="fullname" style={styles.label}>
                            Full Name
                        </label>

                        <input
                            type="text"
                            id="fullname"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your full name"
                        />
                    </div>

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
                            style={styles.input}
                            placeholder="scholar@university.edu"
                        />
                    </div>

                    {/* Password */}
                    <div style={styles.inputGroup}>
                        <label htmlFor="password" style={styles.label}>
                            Security Key
                        </label>

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={styles.input}
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Sign Up Button */}
                    <button type="submit" style={styles.button}>
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div style={styles.dividerContainer}>
                    <div style={styles.line}></div>
                    <p style={styles.dividerText}>or continue with</p>
                    <div style={styles.line}></div>
                </div>

                {/* Social Buttons */}
                <div style={styles.socialContainer}>
                    <button style={styles.socialButton}>
                        Google
                    </button>

                    <button style={styles.socialButton}>
                        Uni Portal
                    </button>
                </div>

                {/* Login Redirect */}
                <p style={styles.loginText}>
                    Already have an account?{" "}
                    <a href="/login" style={styles.loginLink}>
                        Log In
                    </a>
                </p>
                
                {/* Footer */}
      <footer style={styles.footer}>
        © 2026 Serene Study Systems. Built to manage your tasks.
      </footer>

            </div>
        </div>
    );
}

const styles = {
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#edf2f7",
        padding: "20px",
    },

    card: {
        backgroundColor: "#ffffff",
        padding: "50px",
        borderRadius: "30px",
        width: "100%",
        maxWidth: "450px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column" as const,
    },

    title: {
        fontSize: "40px",
        color: "#1565c0",
        fontWeight: "bold",
        textAlign: "center" as const,
        marginBottom: "10px",
    },

    subtitle: {
        textAlign: "center" as const,
        fontSize: "18px",
        color: "#555",
        marginBottom: "35px",
    },

    form: {
        display: "flex",
        flexDirection: "column" as const,
        gap: "20px",
    },

    inputGroup: {
        display: "flex",
        flexDirection: "column" as const,
    },

    label: {
        marginBottom: "8px",
        fontSize: "16px",
        fontWeight: "600",
        color: "#333",
    },

    input: {
        padding: "16px",
        borderRadius: "30px",
        border: "1px solid #d1d5db",
        outline: "none",
        fontSize: "16px",
        backgroundColor: "#f8fbff",
        boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    },

    button: {
        marginTop: "10px",
        padding: "16px",
        borderRadius: "30px",
        border: "none",
        backgroundColor: "#1565c0",
        color: "#fff",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
    },

    dividerContainer: {
        display: "flex",
        alignItems: "center",
        marginTop: "35px",
        marginBottom: "25px",
        gap: "10px",
    },

    line: {
        flex: 1,
        height: "1px",
        backgroundColor: "#cbd5e1",
    },

    dividerText: {
        color: "#666",
        fontSize: "14px",
        whiteSpace: "nowrap" as const,
    },

    socialContainer: {
        display: "flex",
        gap: "15px",
    },

    socialButton: {
        flex: 1,
        padding: "14px",
        borderRadius: "20px",
        border: "none",
        backgroundColor: "#eaf2ff",
        color: "#222",
        fontSize: "16px",
        fontWeight: "600",
        cursor: "pointer",
    },

    loginText: {
        marginTop: "30px",
        textAlign: "center" as const,
        color: "#555",
        fontSize: "16px",
    },

    loginLink: {
        color: "#1565c0",
        fontWeight: "bold",
        textDecoration: "none",
    },

     footer: {
    marginTop: "35px",
    textAlign: "center" as const,
    color: "#444",
    fontSize: "16px",
  },
};

export default Signup;