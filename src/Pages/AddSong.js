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
            <input type="text"></input>
            <p>This song can play if <span style={{fontWeight: "bold"}}>any</span> of the following condition sets are true:</p>
            <div className='evenly-spaced'>
                <IconButton                 
                icon={'X'}
                text={'Quit'}
                palette={"light"}
                linkTo={"/"}></IconButton>
                
                <IconButton                 
                icon={'check'}
                text={'Add Song'}
                palette={"light"}
                linkTo={"/"}></IconButton>
            </div>
        </div>
    </div>
  );
}

export default AddSong;
