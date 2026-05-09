import React from 'react';
import './AboutHer.css';

const AboutHer = () => {
  return (
    <section className="about-her" id="about">
      <div className="container about-container">
        <div className="about-image">
          <img src="/images/foto2.jpg" alt="Our Muse" />
        </div>
        <div className="about-content">
          <p className="about-subtitle">OUR MUSE</p>
          <h2 className="about-title">About Her</h2>
          <p className="about-text">
            Dia adalah perpaduan warna sunset dan bisikan pagi. Dengan hati yang berdetak untuk puisi dan pikiran yang berkelana melalui taman-taman rahasia, dia membawa melodi unik pada semua yang dia sentuh.
          </p>
          <p className="about-text">
            Di balik keanggunan dan tawanya, terdapat kedalaman kebaikan yang menginspirasi setiap kata yang tertulis di halaman ini. Ruang digital ini adalah penghargaan untuk cahayanya.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-value">100+</span>
              <span className="stat-label">Puisi Didedikasikan</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">Infinite</span>
              <span className="stat-label">Kenangan Manis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHer;
