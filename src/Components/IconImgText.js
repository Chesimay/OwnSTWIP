import React from 'react';
import '../index.css'; 
import '../CSS/Icon.css';

const IconImgText = ({ text, palette }) => {
  // Calculate the maximum font size that fits the text within 100px by 100px
  const calculateMaxFontSize = () => {
    // Start with a large font size
    let fontSize = 100; // Adjust this as needed
    // Create a temporary element to measure text width
    const tempElement = document.createElement('span');
    tempElement.style.fontSize = `${fontSize}px`;
    tempElement.style.visibility = 'hidden';
    tempElement.innerHTML = text;
    document.body.appendChild(tempElement);
    // Reduce font size until text fits within 90px by 90px
    while (tempElement.offsetWidth > 90 || tempElement.offsetHeight > 90) {
    //    console.log("test : "+fontSize);

      fontSize--;
      tempElement.style.fontSize = `${fontSize}px`;
    }
    // Remove the temporary element from the DOM
    //console.log("removing child "+tempElement.textContent);
    document.body.removeChild(tempElement);
    return fontSize;
  };

  const maxFontSize = calculateMaxFontSize();

  return (
    <div className="Icon-display-area" style={{ fontSize: `${maxFontSize}px` }}>
      {text}
    </div>
  );
};

export default IconImgText;
