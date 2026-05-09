import React from 'react';
import './Story.css';

const Story = () => {
  return (
    <section className="story-diary-section" id="story">
      <div className="container story-diary-container">
        <p className="story-label">PERCIKAN PERTAMA</p>
        <h2 className="story-heading">Ini bukan sekadar pertemuan biasa; ini adalah pergeseran semesta.</h2>
        
        <div className="story-quote-block">
          <p>"Aku ingat cara cahaya menyentuh matamu, dan tiba-tiba, seluruh dunia seolah kehilangan fokusnya."</p>
        </div>

        <div className="story-image-full">
          <img src="/images/foto4.jpg" alt="Moment" />
        </div>

        <p className="story-description">
          Kita menghabiskan berjam-jam berbicara tentang segalanya dan bukan apa-apa. 
          Kopi menjadi dingin, tapi percakapan kita semakin hangat. 
          Momen-momen kecil dan tenang itulah yang membangun pondasi siapa kita hari ini.
        </p>
      </div>
    </section>
  );
};

export default Story;
