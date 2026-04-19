import { useEffect, useState } from 'react';
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import Spinner from './components/Spinner';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    const savedCart = localStorage.getItem('cartCount');
    if (savedCart) {
      setCartCount(Number(savedCart));
    }

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="app">
      <Header cartCount={cartCount} />
      <Main setCartCount={setCartCount} />
      <Footer />
    </div>
  );
}

export default App;