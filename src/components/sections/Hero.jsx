import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';
import Wave from '../Wave';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const heartsContainerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-text-content > *', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
      );

      // Unified animation for appreciation text (Desktop & Mobile)
      gsap.fromTo('.mobile-appreciation', { opacity: 0, y: -10 }, { opacity: 1, y: 0, duration: 1, delay: 1.5 });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleHeartClick = () => {
    const container = heartsContainerRef.current;
    if (!container) return;

    const isMobile = window.innerWidth <= 768;

    // Create a larger burst of hearts and text
    for (let i = 0; i < 20; i++) {
      const el = document.createElement('div');
      const isText = Math.random() > 0.6;
      
      el.className = 'burst-element';
      el.innerHTML = isText ? 'Tiara cantik ✨' : '❤️';
      el.style.position = 'fixed';
      el.style.pointerEvents = 'none';
      el.style.zIndex = '2000';
      el.style.whiteSpace = 'nowrap';
      el.style.fontSize = isText ? (isMobile ? '0.9rem' : '1.2rem') : '1.5rem';
      el.style.color = isText ? '#ff69b4' : 'inherit';
      el.style.fontWeight = '700';
      el.style.filter = 'drop-shadow(0 2px 5px rgba(0,0,0,0.2))';
      
      const btn = document.querySelector('.floating-heart-btn');
      if (!btn) return;
      const rect = btn.getBoundingClientRect();
      el.style.left = `${rect.left + rect.width / 2}px`;
      el.style.top = `${rect.top}px`;

      document.body.appendChild(el);

      const targetX = (Math.random() - 0.8) * (window.innerWidth * 0.8);
      const targetY = -Math.random() * (window.innerHeight * 0.7) - 100;

      gsap.to(el, {
        x: targetX,
        y: targetY,
        rotation: (Math.random() - 0.5) * 180,
        opacity: 0,
        scale: Math.random() * 1.5 + 0.8,
        duration: Math.random() * 2.5 + 1.5,
        ease: 'power2.out',
        onComplete: () => el.remove()
      });
    }
  };

  return (
    <section className="hero-section" id="home" ref={heroRef}>
      <div ref={heartsContainerRef}></div>
      
      {/* Desktop Floating Cards removed as requested */}

      <div className="container hero-container">
        {/* Mockup Frame (Now used for both Desktop and Mobile) */}
        <div className="mobile-phone-frame">
          <div className="mobile-appreciation">
            <span className="badge">Special Person ✨</span>
            <p className="appreciation-sub">Untukmu yang selalu menjadi alasan di balik setiap senyumku.</p>
          </div>

          <div className="phone-screen">
            <img src="/images/foto3.jpg" alt="Portrait" className="phone-img" />
          </div>

          {/* Caption hidden on both devices for a cleaner look if desired, or kept only for structure */}
          <div className="phone-caption">
            <h3>Pesona Tiara</h3>
            <p>Setiap tatapanmu menyimpan keajaiban yang tak pernah gagal membuatku terpukau.</p>
            <a href="#praise" className="btn btn-primary btn-sm">Buka Pesan</a>
          </div>
        </div>

        <div className="hero-text-content">
          <p className="hero-eyebrow">DEDIKASI UNTUKMU</p>
          <h1 className="hero-title" ref={titleRef}>Rayakan setiap keindahan dan pesona dalam dirimu.</h1>
          <div className="hero-btns">
            <a href="#praise" className="btn btn-primary">Pesan Spesial</a>
            <a href="#gallery" className="btn btn-outline">Lihat Pesona</a>
          </div>
        </div>
      </div>

      <div className="floating-heart-btn" onClick={handleHeartClick}>❤️</div>
      <Wave fillColor="white" />
    </section>
  );
};

export default Hero;
