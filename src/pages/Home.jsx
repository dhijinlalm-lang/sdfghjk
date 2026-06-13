import Header from '../components/Header';
import HeroBanner from '../components/HeroBanner';
import Search from '../components/Search';
import Categories from '../components/Categories';
import ItemCards from '../components/ItemCards';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner />
      <Search />
      <Categories />
      <ItemCards />
      <Footer />
    </>
  );
}
