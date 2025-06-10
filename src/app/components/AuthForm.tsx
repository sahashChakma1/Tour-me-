'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function AuthForm({ type }: { type: 'login' | 'signup' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle auth logic
    if (type === 'login') {
      window.location.href = '/home';
    } else {
      window.location.href = '/';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80">
      <h1 className="text-2xl font-bold mb-6 text-center">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="w-full mb-4 px-4 py-2 border rounded"
      />
      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>
      <div className="text-center mt-4">
        {type === 'login' ? (
          <p>
            New user? <Link href="/signup" className="text-blue-600 hover:underline">Sign Up</Link>
          </p>
        ) : (
          <p>
            Already have an account? <Link href="/" className="text-blue-600 hover:underline">Login</Link>
          </p>
        )}
      </div>
    </form>
  );
}
