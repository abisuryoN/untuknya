import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Hero.css';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const quote1Ref = useRef(null);
  const quote2Ref = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      
      tl.fromTo('.hero-content > *', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.5 }
      );

      gsap.fromTo([quote1Ref.current, quote2Ref.current],
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, delay: 1.2, stagger: 0.3 }
      );

      // Subtle float animation for quotes
      gsap.to([quote1Ref.current, quote2Ref.current], {
        y: "+=10",
        duration: 2,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" id="home" ref={heroRef}>
      <div className="floating-quote quote-top-left" ref={quote1Ref}>
        "Senyummu adalah matahari pagiku yang paling indah."
      </div>
      <div className="floating-quote quote-bottom-right" ref={quote2Ref}>
        "Setiap detik bersamamu adalah keajaiban yang nyata."
      </div>
      
      <div className="hero-content">
        <p className="hero-subtitle">A Digital Love Letter</p>
        <h1 className="hero-title" ref={titleRef}>Untuk Kamu, Dunia Kecilku</h1>
        <p className="hero-description">
          Abadikan setiap momen indah dan mimpi yang kita bagi bersama dalam perjalanan ini.
        </p>
        <div className="hero-btns">
          <button className="btn btn-primary">Tulis Pesan</button>
          <button className="btn btn-outline">Lihat Galeri</button>
        </div>
      </div>

      <div className="floating-heart-btn">❤️</div>
    </section>
  );
};

export default Hero;
