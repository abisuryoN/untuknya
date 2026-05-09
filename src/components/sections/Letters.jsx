import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Letters.css';

const letters = [
  {
    title: "Matahari Pagi",
    text: "Melihat senyummu di pagi hari adalah alasan terbaik untuk memulai hari dengan penuh semangat.",
    author: "Kesan Untukmu"
  },
  {
    title: "Anggun & Cerdas",
    text: "Caramu membawa diri dan caramu berpikir selalu membuatku kagum. Kamu adalah inspirasi sejati.",
    author: "Kesan Untukmu"
  },
  {
    title: "Kebaikan Hati",
    text: "Dunia terasa lebih hangat karena ada seseorang sepertimu yang memiliki hati begitu tulus dan baik.",
    author: "Kesan Untukmu"
  }
];

const Letters = () => {
  const sectionRef = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Use fromTo for better reliability and set initial state
      gsap.fromTo('.letter-card', 
        { 
          y: 30, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 90%', // Earlier start for mobile
            toggleActions: 'play none none none'
          }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="letters-section" id="praise" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">Apresiasi & Kekaguman</h2>
        <p className="section-subtitle">Beberapa hal kecil yang membuatmu begitu istimewa di mataku.</p>
        
        <div className="letters-grid" ref={gridRef}>
          {letters.map((l, i) => (
            <div className="letter-card" key={i} style={{ opacity: 0 }}> {/* Start hidden for animation */}
              <div className="letter-header">
                <span className="quote-mark">“</span>
                <h3 className="letter-title">{l.title}</h3>
              </div>
              <p className="letter-text">{l.text}</p>
              <div className="letter-footer">
                <div className="author-line"></div>
                <span className="author-name">{l.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Letters;
