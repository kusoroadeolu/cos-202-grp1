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
  return null;
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Real-time validation
  const emailError = useMemo(() => validateEmail(email), [email]);
  const passwordError = useMemo(() => validatePassword(password), [password]);
  const isFormValid = !emailError && !passwordError && email && password;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isFormValid) {
      setError('Please fix validation errors before submitting');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Something went wrong');
        return;
      }

      router.push('/dashboard');

    } catch (err) {
      console.error("Login failed:", err);
      setError('Network error: Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to your account to continue"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkHref="/sign-up"
    >
      <AuthError message={error} />
      <form onSubmit={handleSubmit} className="space-y-5">
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
        <FormInput
          label="Password"
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          required
          error={password && passwordError ? passwordError : undefined}
        />
        <AuthButton 
          label="Log in" 
          loadingLabel="Logging in..." 
          loading={loading}
          disabled={!isFormValid || loading}
        />
      </form>
    </AuthCard>
  );
}

export default Login;