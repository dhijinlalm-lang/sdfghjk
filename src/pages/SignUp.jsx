import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    console.log('Sign up attempt:', {
      fullName: formData.fullName,
      email: formData.email,
    });
    alert('Account created successfully! (Backend integration needed)');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center px-4 py-12">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Sign Up Card */}
      <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-12">
        {/* Back Button */}
        <Link to="/login" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 mb-6 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Login
        </Link>

        {/* Logo & Title */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ebook library</h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Create Account</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Join our community and start reading</p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSignUp} className="space-y-5">
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 dark:text-white focus:outline-none focus:border-purple-500 transition"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 dark:text-white focus:outline-none focus:border-purple-500 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M15.171 13.576l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414z" />
                  </svg>
                )}
              </button>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">At least 8 characters</p>
          </div>

          {/* Confirm Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Confirm Password</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-700 dark:text-white focus:outline-none focus:border-purple-500 transition pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3.5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition"
              >
                {showConfirmPassword ? (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                    <path d="M15.171 13.576l1.414 1.414a1 1 0 001.414-1.414l-1.414-1.414a1 1 0 00-1.414 1.414z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Terms Agreement */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input type="checkbox" className="w-5 h-5 mt-0.5 rounded border-gray-300" required />
            <span className="text-sm text-gray-700 dark:text-gray-300">
              I agree to the{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-medium">
                Privacy Policy
              </a>
            </span>
          </label>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          Already have an account?{' '}
          <Link to="/login" className="text-purple-600 hover:text-purple-700 dark:text-purple-400 font-semibold transition">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
