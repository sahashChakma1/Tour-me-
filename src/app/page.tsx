'use client';

import Link from 'next/link';
import AuthForm from './components/AuthForm';
import AuthDebug from './components/AuthDebug';

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-100 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Welcome to TourMe</h1>
      <AuthForm type="login" />

      {/* Signup Link */}
      <p className="text-sm text-gray-600">
        Don't have an account?{' '}
        <Link href="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>

      <AuthDebug />
    </main>
  );
}
