import { Link } from 'react-router-dom';
import '../CSS/Icon.css';
import IconImg from './IconImg.js';

function IconButton({icon, text, palette, onClick, linkTo}) {
  var id = icon+"-"+text;
  var i = 1;
  while(document.getElementById(id) != null){
      id = icon+"-"+text+"-"+i;
      i++;
  }

  if(text !== null && text !== ""){

    return (
      <div className='Icon-background' id={id} onClick={onClick}>
        <Link to={linkTo}>
          <div className="Icon-button">

            <IconImg icon={icon} palette={palette} />
            <p>{text}</p>
            
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className='Icon-background' id={id} onClick={onClick}>
      <Link to={linkTo}>
        <div className="Icon-button">
          <IconImg icon={icon} palette={palette} focus={true}/>          
        </div>
      </Link>
    </div>
  );
}

export default IconButton;