import React from 'react';
import Link from 'next/link';

// --- FormInput ---
interface FormInputProps {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  minLength?: number;
}

export function FormInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder,
  required,
  minLength,
}: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        minLength={minLength}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
      />
    </div>
  );
}

// --- AuthButton ---
interface AuthButtonProps {
  loading: boolean;
  label: string;
  loadingLabel: string;
}

export function AuthButton({ loading, label, loadingLabel }: AuthButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white text-sm font-medium rounded-lg transition cursor-pointer disabled:cursor-not-allowed"
    >
      {loading ? loadingLabel : label}
    </button>
  );
}

// --- AuthError ---
interface AuthErrorProps {
  message: string;
}

export function AuthError({ message }: AuthErrorProps) {
  if (!message) return null;
  return (
    <div className="bg-red-50 border border-red-200 text-red-600 text-sm rounded-lg px-4 py-3 mb-5">
      {message}
    </div>
  );
}

// --- AuthCard ---
interface AuthCardProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footerText: string;
  footerLinkText: string;
  footerLinkHref: string;
}

export function AuthCard({
  title,
  subtitle,
  children,
  footerText,
  footerLinkText,
  footerLinkHref,
}: AuthCardProps) {
  return (
    <div className="min-h-screen bg-[#f5f8fc] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
        {children}
        <p className="text-sm text-center text-gray-500 mt-6">
          {footerText}{' '}
          <Link href={footerLinkHref} className="text-blue-600 font-medium hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}