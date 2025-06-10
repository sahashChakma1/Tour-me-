'use client';
import AuthForm from '../components/AuthForm';


export default function SignupPage() {
  return (
    <main className="flex items-center justify-center h-screen bg-gray-100">
      <AuthForm type="signup" />
    </main>
  );
}
