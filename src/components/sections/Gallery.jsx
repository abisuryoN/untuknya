import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Gallery.css';

const images = [
  "/images/foto1.jpg",
  "/images/foto2.jpg",
  "/images/foto3.jpg",
  "/images/foto4.jpg",
  "/images/foto5.jpg",
  "/images/foto6.jpg",
  "/images/foto7.jpg",
  "/images/foto8.jpg"
];

const Gallery = () => {
  const gridRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.gallery-item', {
        scrollTrigger: {
          trigger: gridRef.current,
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });
    }, gridRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <h2 className="section-title">Sudut Pesona</h2>
        <p className="section-subtitle">Setiap potretmu adalah karya seni yang memancarkan keindahan sejati.</p>
        
        <div className="gallery-grid" ref={gridRef}>
          {images.map((img, i) => (
            <div className={`gallery-item item-${i + 1}`} key={i}>
              <div className="gallery-img-wrapper">
                <img src={img} alt={`Memory ${i + 1}`} />
                <div className="gallery-overlay">
                  <span>Cantik #{i + 1}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
