import React from 'react';

const Wave = ({ fillColor = "var(--color-bg)" }) => {
  return (
    <div style={{
      position: 'absolute',
      bottom: '-1px', // -1px to avoid tiny rendering gaps
      left: 0,
      width: '100%',
      overflow: 'hidden',
      lineHeight: 0,
      zIndex: 2
    }}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none"
        style={{
          position: 'relative',
          display: 'block',
          width: 'calc(100% + 1.3px)',
          height: '80px' // Slightly taller for a smoother look
        }}
      >
        <path 
          /* This path fills the BOTTOM of the SVG box to blend into the next section */
          d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
          style={{ fill: fillColor }}
        ></path>
      </svg>
    </div>
  );
};

export default Wave;
