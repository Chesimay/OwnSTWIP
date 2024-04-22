import React, { useState, useRef } from 'react';
import '../CSS/Carousel.css'; 

const Carousel = ({ items }) => {
    const containerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedIndex(index);
    const itemWidth = containerRef.current.children[0].offsetWidth;
    const newScrollLeft = index * itemWidth;
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className="carousel-container"
      ref={containerRef}
      style={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        width: '100%',
        position: 'relative',
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="carousel-item"
          style={{
            backgroundColor: selectedIndex === index ? 'rgba(91, 91, 91, 60)' : 'rgba(57, 57, 57, 60)',
          }}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
