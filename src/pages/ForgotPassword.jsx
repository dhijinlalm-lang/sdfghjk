import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter your email');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Card */}
      <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-12">
        {/* Back Button */}
        <Link to="/login" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Login
        </Link>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Reset Password</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">Enter your email address and we'll send you a link to reset your password.</p>

        {submitted ? (
          <div className="space-y-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <svg className="w-16 h-16 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-2">Check your email</h3>
              <p className="text-green-600 dark:text-green-300 text-sm mb-4">
                We've sent a password reset link to <strong>{email}</strong>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                Check your spam folder if you don't see the email.
              </p>
            </div>
            <button
              onClick={() => setSubmitted(false)}
              className="w-full text-center text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium transition"
            >
              Try another email
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 dark:text-white focus:outline-none focus:border-purple-500 transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
            >
              Send Reset Link
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Remember your password?{' '}
            <Link to="/login" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-semibold transition">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
