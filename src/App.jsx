import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Search from './components/Search';
import Categories from './components/Categories';
import ItemCards from './components/ItemCards';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <HeroBanner />
      <Search />
      <Categories />
      <ItemCards />
      <Footer />
    </div>
  );
}

export default App;
