'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AuthForm({ type }: { type: 'login' | 'signup' }) {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (type === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/home`,
          data: { name },
        },
      });

      if (error) {
        setError(error.message);
      } else {
        setMessage('Check your email to verify your account.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });

      if (error) {
        setError(error.message);
      } else {
        router.push('/home');
      }
    }
  };

  return (
    <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          {type === 'signup' ? 'Create an Account' : 'Login to Your Account'}
        </h2>
        <p className="text-sm text-gray-500">
          {type === 'signup'
            ? 'Sign up to explore and book your next adventure.'
            : 'Welcome back! Please login to continue.'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && <p className="text-sm text-red-600">{error}</p>}
        {message && <p className="text-sm text-green-600">{message}</p>}

        {type === 'signup' && (
          <div>
            <label className="text-sm block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
        )}

        <div>
          <label className="text-sm block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <div>
          <label className="text-sm block text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          {type === 'signup' ? 'Create Account' : 'Log In'}
        </button>
      </form>

      {type === 'login' && (
        <div className="text-sm text-center text-gray-600">
          Don’t have an account?{' '}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </div>
      )}
    </div>
  );
}
