"use client"

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold text-[#2F80D1]">Student Task Manager</h1>
      <p className="text-gray-500">Stay on top of your assignments and deadlines.</p>
      <div className="flex gap-4">
        <Link href="/login" className="px-6 py-2 border border-[#2F80D1] text-[#2F80D1] rounded">
          Login
        </Link>
        <Link href="/sign-up" className="px-6 py-2 bg-[#2F80D1] text-white rounded">
          Sign Up
        </Link>
      </div>
    </div>
  );
}