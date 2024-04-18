//import rain from '../Images/rain_background.jpg';
import '../index.css';
import IconButton from "../Components/IconButton.js";
import IconDisplay from "../Components/IconDisplay.js";
import VidPlaylist from '../Components/VidPlaylist.js';

function HomePage({background}) {
    //if background photo is in this enum
    let palette = "dark";
    //if it is in this other enum, let palette = "light";
  return (
    <div className="page">
        <div className='left-justified'>
            <p>Good afternoon! It's</p>
        </div>
        <div className='centered'>
            <p>Thursday, April 18th</p>
            <h1>2:21 PM</h1>
            <div className='evenly-spaced'>
                <IconDisplay 
                icon={'35'}
                text={'° F'}
                palette={palette}
                />
                <IconDisplay 
                icon={'rain'}
                text={'Raining'}
                palette={palette}
                />
            </div>
        </div>
        <div className='right-justified'></div>
        <div className='centered'>
            <div className='evenly-spaced'>
                    <IconButton 
                    icon={'plus'}
                    text={'Add Song'}
                    palette={"dark"}
                    />
                    <IconButton 
                    icon={'gear'}
                    text={'Settings'}
                    palette={"light"}
                    linkTo={"/settings"}
                    />
                </div>
        </div>
    </div>
  );
}

export default HomePage;
