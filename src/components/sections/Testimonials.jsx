import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    text: "Cara kamu menatap bintang membuatku merasa akhirnya aku pulang. Terima kasih telah menjadi cahaya tetapku.",
    author: "Dari Aku",
    date: "Mei 2026"
  },
  {
    text: "Setiap percakapan kecil denganmu terasa seperti bab dari buku yang tak pernah ingin aku selesaikan.",
    author: "Dari Aku",
    date: "Mei 2026"
  },
  {
    text: "Dunia digital terasa begitu hangat karena setiap baris kata yang kamu kirimkan selalu membawa senyum.",
    author: "Dari Aku",
    date: "Mei 2026"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="praise">
      <div className="container">
        <h2 className="section-title">Love Letters & Praise</h2>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="quote-icon">"</div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-footer">
                <div className="author-avatar"></div>
                <div className="author-info">
                  <span className="author-name">{t.author}</span>
                  <span className="author-date">{t.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
