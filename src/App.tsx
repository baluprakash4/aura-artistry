import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PigeonAnimation } from './components/PigeonAnimation';
import { BackgroundCollage } from './components/BackgroundCollage';
import { FlowerDecorations } from './components/PaperFlower';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { CustomOrder } from './pages/CustomOrder';
import { Workshops } from './pages/Workshops';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen selection:bg-brand-clay/20 selection:text-brand-clay">
        <BackgroundCollage />
        <FlowerDecorations />
        <PigeonAnimation />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/custom" element={<CustomOrder />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
