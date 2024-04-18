import basic from '../logo.svg';

import '../CSS/Icon.css';
import IconImg from './IconImg.js';
import IconImgText from './IconImgText.js';

function IconDisplay({icon, text, palette}) {
    //note to self: I should really make an enum of all the available icons
    // it should include "plus", "gear", "X", "check", "rain", and "square", at least
    if (icon.includes("plus") || icon.includes("gear")){
        return (
            <div className="Icon-background">
                <IconImg 
                  icon={icon}
                  palette={palette}/>
                <p>{text}</p>
            </div>
          );
    }


    return (
    <div className="Icon-background">
        <IconImgText
            text={""+icon}
            palette={palette}
        />
        <p>{text}</p>
    </div>
    );
}

export default IconDisplay;