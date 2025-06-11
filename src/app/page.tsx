'use client';

import AuthForm from './components/AuthForm';

export default function LoginPage() {
  return (
    <main className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-sky-100 via-blue-200 to-indigo-200 font-sans">
      {/* Optional subtle pattern */}
      <div className="absolute inset-0 bg-[url('/background-pattern.svg')] bg-cover bg-center opacity-5 z-0 pointer-events-none" />

      <div className="relative z-10 w-full max-w-md backdrop-blur-md bg-white/80 shadow-xl rounded-3xl p-10 space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-blue-900 tracking-tight">Welcome to <span className="text-indigo-600">TourMe</span></h1>
          <p className="text-gray-700 text-sm mt-2">
            Log in to explore local experiences and guided adventures
          </p>
        </div>

        <AuthForm type="login" />
      </div>

      {/* Simple fade-in animation */}
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
