import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Story.css';
import Wave from './Wave';

gsap.registerPlugin(ScrollTrigger);

const Story = ({ imagePath, text, isReversed, bgColor, nextSectionColor }) => {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out"
      });

      gsap.to(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse"
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="story-section" 
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
    >
      <div className={`story-container ${isReversed ? 'reversed' : ''}`}>
        <div className="story-image-wrapper" ref={imageRef}>
          <img src={imagePath} alt="Memory" className="story-image" />
        </div>
        <div className="story-content" ref={contentRef}>
          <p className="story-text">"{text}"</p>
        </div>
      </div>
      {nextSectionColor && <Wave fillColor={nextSectionColor} />}
    </section>
  );
};

export default Story;
