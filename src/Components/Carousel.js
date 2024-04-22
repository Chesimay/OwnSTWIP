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
            borderBottom: selectedIndex === index ? '2px solid blue' : '2px solid transparent',
          }}
          onClick={() => handleItemClick(index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};
//   return (
//     <div className="carousel-container">
//       <div
//         className="carousel"
//         style={{ transform: `translateX(-${scrollLeft}px)` }}
//         ref={carouselRef}
//       >
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className="carousel-item"
//             onClick={() => handleItemClick(index)}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Carousel;
