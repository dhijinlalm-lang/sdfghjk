export default function HeroBanner() {
  return (
    <section id="hero" className="bg-gradient-to-r from-purple-600 to-purple-400 py-12 px-4">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden" style={{ height: '350px' }}>
        <div className="h-full bg-gradient-to-br from-purple-600 via-purple-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          
          {/* Content */}
          <div className="relative z-10 text-center text-white">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">Your Digital Library Awaits</h2>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">Discover thousands of ebooks and digital resources at your fingertips</p>
          </div>
        </div>
      </div>
    </section>
  );
}
