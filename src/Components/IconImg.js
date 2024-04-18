//import '../CSS/Icon.css';

function IconButton({icon, palette, hover}) {
    let lightFill = "#c9c9c9";
    let fillStr = "#919191";
    let darkFill = "#575757";

    if (icon.includes("plus")){

      return (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <title>plus sign</title> {/* This is the alt text for the svg */}
            {/* Horizontal rectangle */}
            <rect x="5" y="43" width="90" height="16" style={{fill: fillStr}}/>
            {/* Vertical rectangle */}
            <rect x="43" y="5" width="16" height="90" style={{fill: fillStr}}/>
        </svg>
        );
    
    }
    if (icon.includes("gear")){
      return (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <title>gear icon</title>
            {/* Horizontal rectangle */}
            <rect x="5" y="43" width="90" height="16" style={{fill: fillStr}}/>
            {/* Vertical rectangle */}
            <rect x="42" y="5" width="16" height="90" style={{fill: fillStr}}/>
            
            {/* Rectangle at 30 degrees */}
            <rect x="5" y="43" width="90" height="16" transform="rotate(30 50 50)" style={{fill: fillStr}}/>
            {/* Rectangle at 60 degrees */}
            <rect x="5" y="42.5" width="90" height="16" transform="rotate(60 50 50)" style={{fill: fillStr}}/>
            {/* Rectangle at -30 degrees */}
            <rect x="5" y="43" width="90" height="16" transform="rotate(-30 50 50)" style={{fill: fillStr}}/>
            {/* Rectangle at -60 degrees */}
            <rect x="5" y="42.5" width="90" height="16" transform="rotate(-60 50 50)" style={{fill: fillStr}}/>

            {/* Middle of the gear */}
            <circle cx="50" cy="50" r="40" style={{fill: fillStr}}/>
            <circle cx="50" cy="50" r="10" style={{fill: darkFill}}/>
        </svg>
      );  
    }

    if (icon.includes("back")){
      return (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <title>spreadsheet icon</title>
            {/* Horizontal rectangle */}
            <rect x="7" y="43" width="87" height="16" style={{fill: fillStr}}/>
            {/* Rectangle at 30 degrees */}
            <rect x="10" y="37" width="40" height="16" transform="rotate(33 0 50)" style={{fill: fillStr}}/>
            {/* Rectangle at -30 degrees */}
            <rect x="10" y="47" width="40" height="16" transform="rotate(-30 0 50)" style={{fill: fillStr}}/>
            
        </svg>
      );  
    }


    return (
        <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
            <title>button icon</title>
            <rect x="5" y="5" width="90" height="90" style={{fill: fillStr}}/>
        </svg>
        );
  
  }
  
  export default IconButton;