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

export default IconButton;