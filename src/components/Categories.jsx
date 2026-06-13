import { useState } from 'react';

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '📚' },
    { id: 'fiction', name: 'Fiction', icon: '📖' },
    { id: 'science', name: 'Science', icon: '🔬' },
    { id: 'business', name: 'Business', icon: '💼' },
    { id: 'self-help', name: 'Self-Help', icon: '🌟' },
    { id: 'history', name: 'History', icon: '📜' },
    { id: 'technology', name: 'Technology', icon: '💻' },
    { id: 'education', name: 'Education', icon: '🎓' },
  ];

  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Browse Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`p-6 rounded-xl transition transform hover:scale-105 ${
              activeCategory === category.id
                ? 'bg-purple-600 text-white shadow-lg'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            <div className="text-3xl mb-2">{category.icon}</div>
            <div className="font-semibold text-sm">{category.name}</div>
          </button>
        ))}
      </div>
    </section>
  );
}
