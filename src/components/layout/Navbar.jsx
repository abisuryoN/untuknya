import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <div className="nav-left">
            <div className="nav-logo">Tiara 💖</div>
          </div>
          
          <ul className="nav-links">
            <li><a href="#home">Beranda</a></li>
            <li><a href="#story">Cerita</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#about">Tentang</a></li>
          </ul>
        </div>
      </nav>

      {/* Mobile Bottom Navigation (Fixed) */}
      <div className="mobile-bottom-nav">
        <a href="#home" className="nav-item">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Beranda</span>
        </a>
        <a href="#gallery" className="nav-item">
          <span className="nav-icon">🖼️</span>
          <span className="nav-label">Galeri</span>
        </a>
        <a href="#praise" className="nav-item">
          <span className="nav-icon">✨</span>
          <span className="nav-label">Apresiasi</span>
        </a>
        <a href="#about" className="nav-item">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Tentang</span>
        </a>
      </div>
    </>
  );
};

export default Navbar;
