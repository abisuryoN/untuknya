import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './About.css';

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from('.about-image', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
      });

      gsap.from('.about-content', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        },
        x: 50,
        opacity: 0,
        duration: 1.2,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="about-section" id="about" ref={sectionRef}>
      <div className="container about-flex">
        <div className="about-image">
          <div className="image-frame">
            <img src="/images/foto7.jpg" alt="Inspirasi" />
            <div className="frame-decoration"></div>
          </div>
        </div>

        <div className="about-content">
          <p className="about-eyebrow">SOSOK ISTIMEWA</p>
          <h2 className="about-title">Tentang Dia</h2>
          <div className="about-text-wrapper">
            <p className="about-description">
              Dia adalah perpaduan warna sunset dan bisikan pagi. Dengan hati yang berdetak untuk puisi dan pikiran yang berkelana melalui taman-taman rahasia, dia membawa melodi unik pada semua yang dia sentuh.
            </p>
            <p className="about-description">
              Di balik keanggunan dan tawanya, terdapat kedalaman kebaikan yang menginspirasi setiap kata yang tertulis di halaman ini. Ruang digital ini adalah penghargaan untuk cahayanya.
            </p>
          </div>

          <div className="about-stats">
            <div className="stat-box">
              <span className="stat-number">Unlimited</span>
              <span className="stat-label">Pesonamu yang Memukau</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">Forever</span>
              <span className="stat-label">Sosok Paling Berharga</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
