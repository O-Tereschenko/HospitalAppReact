import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./components/header";
import Footer from "./components/footer";
import Spinner from "./components/Spinner";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import DoctorDetails from "./pages/DoctorDetails";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("cartCount");
    if (saved) setCartCount(Number(saved));

    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Header cartCount={cartCount} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/catalog"
            element={<CatalogPage setCartCount={setCartCount} />}
          />
          <Route path="/doctor/:id" element={<DoctorDetails setCartCount={setCartCount} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;