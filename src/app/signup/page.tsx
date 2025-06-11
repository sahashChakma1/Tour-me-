'use client';

import Link from 'next/link';
import AuthForm from '../components/AuthForm';

export default function SignupPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-[#38597a] transition-colors duration-500">
      <div className="relative z-10 w-full max-w-md space-y-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-2xl animate-fade-in">
        <div className="text-center space-y-1">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white">
            Create Your Account
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Join TourMe and start exploring
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Use an email you check regularly for verification
          </p>
        </div>

        <AuthForm type="signup" />

        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{' '}
          <Link href="/" className="text-blue-600 hover:underline">
            Back to Login
          </Link>
        </p>
      </div>

      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
