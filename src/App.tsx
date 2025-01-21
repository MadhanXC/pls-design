import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import LedSigns from './pages/services/LedSigns';
import DigitalSignage from './pages/services/DigitalSignage';
import MonumentSigns from './pages/services/MonumentSigns';
import DesignServices from './pages/services/DesignServices';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/services/led-signs" element={<LedSigns />} />
            <Route path="/services/digital-signage" element={<DigitalSignage />} />
            <Route path="/services/monument-signs" element={<MonumentSigns />} />
            <Route path="/services/design-services" element={<DesignServices />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;