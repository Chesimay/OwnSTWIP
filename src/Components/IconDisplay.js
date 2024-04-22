import basic from '../logo.svg';

import '../CSS/Icon.css';
import IconImg from './IconImg.js';

function IconDisplay({icon, text, palette}) {
    var id = icon+"-"+text;
    var i = 1;
    while(document.getElementById(id) != null){
        id = icon+"-"+text+"-"+i;
        i++;
    }
   
    return (
        <div className="Icon-button Icon-background" id={id}>
            <IconImg 
              icon={icon}
              palette={palette}/>
            <p>{text}</p>
        </div>
      );
}

export default IconDisplay;