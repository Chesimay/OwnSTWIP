import React, { useState } from 'react';
import YouTube from 'react-youtube';
import IconButton from './IconButton.js';
import { useSettings } from '../Non-Component_JS_Files/SettingsContext.js';
import "../index.css";
const VidPlaylist = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  //const videoIds = ['_3ngiSxVCBs', '0FCvzsVlXpQ', 'ddw_LOCXJmo', 'In_06EmHhuk', 'l9raQQ-ehH8']; // Array of YouTube video IDs
  const { settings, setSettings } = useSettings();

  const handleVideoEnd = () => {
    //CURRENTLY:
    // Increment the index to switch to the next video
    setCurrentVideoIndex((prevIndex) =>
      {
        var index = Math.floor(Math.random()*settings.videoList.length);
        while(index==prevIndex){
          index = Math.floor(Math.random()*settings.videoList.length);
        }
        return index;
      }
    );
    
    //IN THE FUTURE:
    // - Save the current id as a string
    // - Check the weather, temperature, and other factors
    // - Update the list of valid videoIds based on the factors
    // - Pick a random index that does not point to the current id from the list of valid videoIds
  };

  

  return (
    <div className='flex-center'>
      <YouTube
        videoId={settings.videoList[currentVideoIndex].id}
        onEnd={handleVideoEnd}
        style={{borderRadius:75, overflow: 'hidden',zIndex:1}}
        opts={{ width: '192', height: '108',
        playerVars: {
            autoplay: 1,
          }, }}
      />
      <div className='centered tiny-button'>
        <IconButton icon={"✏️"} text={""} linkTo={"/add-song"}></IconButton>
        <IconButton icon={"⏭️"} text={""} onClick={handleVideoEnd}></IconButton>
      </div>
      {/* For later, if I can figure out the API call
       <p>{settings.videoList[currentVideoIndex].title}</p> */}
    </div>
  );
};

export default VidPlaylist;