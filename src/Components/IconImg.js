import '../CSS/Icon.css';
import React, { useState, useEffect } from 'react';



function IconButton({icon, palette, hover}) {
  
    //note to self: I should really make an enum of all the available icons
    // it should include "plus", "gear", "back", "X", "check", "rain", and "square", at least

    let lightFill = "#c9c9c9";
    let fillStr = "#919191";
    let darkFill = "#575757";

    if (icon.includes("plus")){

      return (
        <div className="Icon-display-area">
          <svg width="100" height="100" viewBox="0 0 100 100">
              <title>plus sign</title> {/* This is the alt text for the svg */}
              {/* Horizontal rectangle */}
              <rect x="5" y="43" width="90" height="16" style={{fill: fillStr}}/>
              {/* Vertical rectangle */}
              <rect x="43" y="5" width="16" height="90" style={{fill: fillStr}}/>
          </svg>
        </div>
        );
    
    }
    if (icon.includes("gear")){
      return (
        <div className="Icon-display-area">
          <svg width="100" height="100" viewBox="0 0 100 100">
              <title>gear icon</title>
              {/* Horizontal rectangle */}
              <rect x="5" y="42.5" width="90" height="16" style={{fill: fillStr}}/>
              {/* Vertical rectangle */}
              <rect x="42.5" y="5" width="16" height="90" style={{fill: fillStr}}/>
              
              {/* Rectangle at 30 degrees */}
              <rect x="5" y="42.5" width="90" height="16" transform="rotate(30 50 50)" style={{fill: fillStr}}/>
              {/* Rectangle at 60 degrees */}
              <rect x="5" y="42.5" width="90" height="16" transform="rotate(60 50 50)" style={{fill: fillStr}}/>
              {/* Rectangle at -30 degrees */}
              <rect x="5" y="42.5" width="90" height="16" transform="rotate(-30 50 50)" style={{fill: fillStr}}/>
              {/* Rectangle at -60 degrees */}
              <rect x="5" y="42.5" width="90" height="16" transform="rotate(-60 50 50)" style={{fill: fillStr}}/>

              {/* Middle of the gear */}
              <circle cx="50" cy="50" r="40" style={{fill: fillStr}}/>
              <circle cx="50" cy="50" r="10" style={{fill: darkFill}}/>
          </svg>
        </div>
      );  
    }

    if (icon.includes("back")){
      return (
        <div className="Icon-display-area">

          <svg width="100" height="100" viewBox="0 0 100 100">
              <title>spreadsheet icon</title>
              {/* Horizontal rectangle */}
              <rect x="7" y="43" width="87" height="16" style={{fill: fillStr}}/>
              {/* Rectangle at 30 degrees */}
              <rect x="10" y="37" width="40" height="16" transform="rotate(33 0 50)" style={{fill: fillStr}}/>
              {/* Rectangle at -30 degrees */}
              <rect x="10" y="47" width="40" height="16" transform="rotate(-30 0 50)" style={{fill: fillStr}}/>
              
          </svg>
        </div>
      );  
    }

    
    if (icon.includes("X")){
      return (
        <div className="Icon-display-area">

          <svg width="100" height="100" viewBox="0 0 100 100">
              <title>X icon</title>
              {/* Horizontal rectangle */}
              <rect x="5" y="43" width="90" height="16" transform="rotate(45 50 50)" style={{fill: fillStr}}/>
              {/* Vertical rectangle */}
              <rect x="43" y="5" width="16" height="90" transform="rotate(45 50 50)" style={{fill: fillStr}}/>
              
          </svg>
        </div>
      );  
    }

    const [fontSize, setFontSize] = useState(200);

    useEffect(() => {
      const adjustFontSize = () => {
        const containerWidth = 90; // Width of the viewBox
        const maxFontSize = 1000; // Maximum font size
        const svgTextWidth = icon.length * fontSize * 0.5; // Approximation of text width

        if (svgTextWidth > containerWidth) {
          const newFontSize = (containerWidth / svgTextWidth) * fontSize;
          setFontSize(Math.min(newFontSize, maxFontSize));
        }
      };

      adjustFontSize();
      window.addEventListener('resize', adjustFontSize);
      return () => window.removeEventListener('resize', adjustFontSize);
    }, [icon, fontSize]);
    
    //CSS for the text in the svg
    const textStyle = {
      fontFamily: "'Work Sans', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
      fill: '#fff',
      textAnchor: 'middle',
      dominantBaseline: "middle"
    };

    return (
      <div className="Icon-display-area">

        <svg width="100" height="100" viewBox="0 0 100 100">
            <title>{icon}</title>
            <text x="50%" y="60%"  style={{ ...textStyle, fontSize: `${fontSize}px` }}>
              {icon}
            </text>
        </svg>
        </div>
        );
  
        /*
        
            <text x="50%" y="60%"  style={{ ...textStyle, fontSize: `${fontSize}px` }}>
              {icon}
            </text>
            <rect width="90" height="1" fill="green" x="50%" y="50%"></rect>
        */
  }
  
  export default IconButton;