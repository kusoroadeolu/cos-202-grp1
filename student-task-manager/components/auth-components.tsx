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
      <label htmlFor={id} className="text-sm font-medium text-gray-500">
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
        className="w-full px-4 py-2.5 rounded border border-gray-300 bg-white text-gray-900 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2F80D1] focus:border-transparent transition"
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
      className="w-full py-2.5 px-4 bg-[#2F80D1] hover:bg-[#2272be] disabled:opacity-50 text-white text-sm font-medium rounded transition cursor-pointer disabled:cursor-not-allowed"
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
    <div className="border border-red-200 text-red-600 text-sm rounded px-4 py-3 mb-5">
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
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="w-full max-w-md bg-white rounded p-8 border border-gray-200">
        <h2 className="text-2xl font-bold text-[#2F80D1] mb-1">{title}</h2>
        <p className="text-sm text-gray-500 mb-6">{subtitle}</p>
        {children}
        <p className="text-sm text-center text-gray-500 mt-6">
          {footerText}{' '}
          <Link href={footerLinkHref} className="text-[#2F80D1] font-medium hover:underline">
            {footerLinkText}
          </Link>
        </p>
      </div>
    </div>
  );
}