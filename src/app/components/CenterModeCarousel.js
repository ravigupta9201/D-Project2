"use client"

import React, { useRef } from 'react';
// import Testimonials from './components/Testimonials'
import Testimonials from './Testimonials';
import styles from "../styles/centerModeCarousel.module.css"
import { Container } from 'react-bootstrap';

const CenterModeCarousel = ({ testimonials }) => {
const carouselRef = useRef(null);

  const handleClick = (index) => {
    carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
  };

  return (
    <Container>
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {testimonials.map((testimonial, index) => (
          <div className={styles.slide} key={index}>
            <Testimonials {...testimonial} />
          </div>
        ))}
      </div>

      <div className={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={styles.dot}
            onClick={() => handleClick(index)}
          />
        ))}
        </div>
        
    </div>

    </Container>
  );
};

export default CenterModeCarousel;


