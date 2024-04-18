import { Link } from 'react-router-dom';
import '../CSS/Icon.css';
import IconImg from './IconImg.js';

function IconButton({icon, text, palette, linkTo}) {
        
  return (
    <div>
      <Link to={linkTo}>
            <div className="Icon-background">

        <IconImg icon={icon} palette={palette} />
        <p>{text}</p>
        </div>
      </Link>
    </div>
  );
}

export default IconButton;