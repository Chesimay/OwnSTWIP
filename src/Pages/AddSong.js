import '../index.css';
import IconButton from "../Components/IconButton.js";
import IconDisplay from "../Components/IconDisplay.js";

function AddSong() {
    let palette = "light";
  return (
    <div className="page">
        <div className='left-justified'>
            <p>Add Song</p>
            <p>Add Playlist</p>
        </div>
        <div className='centered'>
            <p>Thursday, April 18th</p>
            <h1>2:21 PM</h1>
            <div className='evenly spaced'>
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
            <div className='evenly spaced'>
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

export default AddSong;
