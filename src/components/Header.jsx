import './components/Header.css';

export default function Header() {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">ebook library</h1>
        </div>
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">Home</a>
          <a href="#categories" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">Categories</a>
          <a href="#books" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 transition">Books</a>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition">Sign In</button>
        </nav>
        <button className="md:hidden p-2">
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
