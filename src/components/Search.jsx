import { useState } from 'react';

export default function Search() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <form onSubmit={handleSearch} className="flex gap-2">
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Search ebooks, titles, authors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 dark:bg-slate-800 dark:text-white focus:outline-none focus:border-purple-500 transition"
          />
          <svg className="absolute right-4 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <button
          type="submit"
          className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg transition font-semibold"
        >
          Search
        </button>
      </form>
    </section>
  );
}
