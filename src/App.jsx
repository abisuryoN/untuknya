import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Letters from './components/sections/Letters';
import About from './components/sections/About';
import Gallery from './components/sections/Gallery';
import Story from './components/sections/Story';
import Footer from './components/layout/Footer';

import './index.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Global ScrollTrigger Refresh
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="app-wrapper">
      <Navbar />
      <main>
        <Hero />
        <Story /> {/* Diary style section following reference flow */}
        <Letters />
        <About />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;
