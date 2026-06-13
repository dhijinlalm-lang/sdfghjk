import { useState } from 'react';

export default function ItemCards() {
  const [favorites, setFavorites] = useState(new Set());

  const items = [
    { id: 1, title: 'The Art of Programming', author: 'John Smith', price: '$9.99', rating: 4.8, reviews: 245, cover: '📕' },
    { id: 2, title: 'Digital Marketing 101', author: 'Sarah Johnson', price: '$12.99', rating: 4.6, reviews: 189, cover: '📗' },
    { id: 3, title: 'Quantum Physics Explained', author: 'Dr. Michael Brown', price: '$14.99', rating: 4.9, reviews: 342, cover: '📘' },
    { id: 4, title: 'The Business Blueprint', author: 'Emily Davis', price: '$11.99', rating: 4.7, reviews: 156, cover: '📙' },
    { id: 5, title: 'Web Development Mastery', author: 'Alex Wilson', price: '$13.99', rating: 4.8, reviews: 267, cover: '📕' },
    { id: 6, title: 'AI & Machine Learning', author: 'Dr. Lisa Chen', price: '$15.99', rating: 4.9, reviews: 421, cover: '📗' },
    { id: 7, title: 'Creative Writing Guide', author: 'Robert Taylor', price: '$10.99', rating: 4.5, reviews: 123, cover: '📘' },
    { id: 8, title: 'Financial Freedom', author: 'Jessica Miller', price: '$12.99', rating: 4.7, reviews: 298, cover: '📙' },
  ];

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  return (
    <section id="books" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Books</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
          >
            {/* Book Cover */}
            <div className="h-48 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-6xl relative group overflow-hidden">
              {item.cover}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition"></div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-bold text-gray-900 dark:text-white mb-1 truncate">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{item.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400">({item.reviews})</span>
              </div>

              {/* Price & Actions */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-purple-600">{item.price}</span>
                <button
                  onClick={() => toggleFavorite(item.id)}
                  className={`p-2 rounded-full transition ${
                    favorites.has(item.id)
                      ? 'bg-red-100 text-red-500'
                      : 'bg-gray-100 dark:bg-slate-700 text-gray-400'
                  }`}
                >
                  <svg className="w-5 h-5" fill={favorites.has(item.id) ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Buy Button */}
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition font-semibold">
                Buy Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
