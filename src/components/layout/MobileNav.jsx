import React from 'react';
import './MobileNav.css';

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <a href="#home" className="mobile-nav-item active">
        <span className="icon">🏠</span>
        <span className="label">Home</span>
      </a>
      <a href="#gallery" className="mobile-nav-item">
        <span className="icon">🖼️</span>
        <span className="label">Gallery</span>
      </a>
      <a href="#praise" className="mobile-nav-item">
        <span className="icon">✨</span>
        <span className="label">Praise</span>
      </a>
      <a href="#about" className="mobile-nav-item">
        <span className="icon">👤</span>
        <span className="label">About</span>
      </a>
    </div>
  );
};

export default MobileNav;
