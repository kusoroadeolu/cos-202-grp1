"use client"

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { AuthCard, AuthButton, AuthError, FormInput } from '@/components/auth-components';

// Validation helpers
const validateEmail = (email: string): string | null => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return 'Email is required';
  if (!emailRegex.test(email)) return 'Please enter a valid email';
  return null;
};

const validatePassword = (password: string): string | null => {
  if (!password) return 'Password is required';
  if (password.length < 8) return 'Password must be at least 8 characters';
  if (!/[A-Z]/.test(password)) return 'Must contain at least one uppercase letter';
  if (!/[0-9]/.test(password)) return 'Must contain at least one number';
  return null;
};

const validateName = (name: string): string | null => {
  if (!name) return 'Name is required';
  if (name.trim().length < 2) return 'Name must be at least 2 characters';
  return null;
};

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Real-time validation
  const nameError = useMemo(() => validateName(name), [name]);
  const emailError = useMemo(() => validateEmail(email), [email]);
  const passwordError = useMemo(() => validatePassword(password), [password]);

  const isFormValid = !nameError && !emailError && !passwordError && name && email && password;
  const passwordStrength = useMemo(() => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
  }, [password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!isFormValid) {
      setError('Please fix validation errors before submitting');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || data.message || "Something went wrong");
        return;
      }

      router.push("/dashboard");
    } catch (err) {
      console.error("Signup request failed:", err);
      setError("Network error: Failed to connect to server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Create an account"
      subtitle="Sign up to get started today"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkHref="/login"
    >
      <AuthError message={error} />
      <form onSubmit={handleSubmit} className="space-y-5">
        <FormInput
          label="Name"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          required
          error={name && nameError ? nameError : undefined}
        />
        <FormInput
          label="Email"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          required
          error={email && emailError ? emailError : undefined}
        />
        <div>
          <FormInput
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Min. 8 characters"
            required
            error={password && passwordError ? passwordError : undefined}
            helperText={password && !passwordError ? `Strength: ${['Weak', 'Fair', 'Good', 'Strong', 'Very Strong'][passwordStrength]}` : undefined}
          />
        </div>
        <AuthButton 
          label="Sign up" 
          loadingLabel="Signing up..." 
          loading={loading}
          disabled={!isFormValid || loading}
        />
      </form>
    </AuthCard>
  );
}

export default Signup;