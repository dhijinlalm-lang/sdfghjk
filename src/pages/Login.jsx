import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }
    console.log('Login attempt:', { email, password });
    // Here you would typically make an API call
    alert('Login functionality would be connected to backend');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center px-4">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      {/* Login Card */}
      <div className="relative z-10 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md p-8 md:p-12">
        {/* Logo & Title */}
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ebook library</h1>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">Welcome Back</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Sign in to your account to continue</p>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 px-4 py-3 rounded-lg mb-6 text-sm">
            {error}
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError('');
              }}
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
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
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
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
              <span className="text-gray-700 dark:text-gray-300">Remember me</span>
            </label>
            <Link to="/forgot-password" className="text-purple-600 hover:text-purple-700 dark:hover:text-purple-400 font-medium transition">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition transform hover:scale-105 active:scale-95"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-slate-800 text-gray-500 dark:text-gray-400">Or continue with</span>
          </div>
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-purple-500 dark:hover:border-purple-500 transition">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Facebook</span>
          </button>
        </div>

        {/* Create Account Link */}
        <p className="text-center mt-8 text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-600 hover:text-purple-700 dark:hover:text-purple-400 font-semibold transition">
            Create one now
          </Link>
        </p>
      </div>
    </div>
  );
}
