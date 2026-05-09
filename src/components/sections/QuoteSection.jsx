import React from 'react';
import './QuoteSection.css';

const QuoteSection = () => {
  return (
    <section className="quote-section">
      <div className="container">
        <div className="quote-box">
          <p className="quote-prefix">THE FIRST SPARK</p>
          <h2 className="quote-main">Ini bukan sekadar pertemuan biasa; ini adalah pergeseran semesta.</h2>
          <div className="quote-content">
            <p>"Aku ingat cara cahaya menyentuh matamu, dan tiba-tiba, seluruh dunia seolah kehilangan fokusnya."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
