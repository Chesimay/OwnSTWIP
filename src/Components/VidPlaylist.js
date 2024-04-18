import React, { useState } from 'react';
import YouTube from 'react-youtube';
import "../index.css";
const VidPlaylist = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoIds = ['_3ngiSxVCBs', '0FCvzsVlXpQ', 'ddw_LOCXJmo', 'In_06EmHhuk', 'l9raQQ-ehH8']; // Array of YouTube video IDs

  const handleVideoEnd = () => {
    //CURRENTLY:
    // Increment the index to switch to the next video
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoIds.length - 1 ? 0 : prevIndex + 1
    );
    
    //IN THE FUTURE:
    // - Save the current id as a string
    // - Check the weather, temperature, and other factors
    // - Update the list of valid videoIds based on the factors
    // - Pick a random index that does not point to the current id from the list of valid videoIds
  };

  

  return (
    <div className='video-player'>
      <YouTube
        videoId={videoIds[currentVideoIndex]}
        onEnd={handleVideoEnd}
        style={{borderRadius:75, overflow: 'hidden',zIndex:1}}
        opts={{ width: '192', height: '108',
        playerVars: {
            autoplay: 1,
          }, }}
      />
    <button onClick={handleVideoEnd}>⏭</button>

    </div>
  );
};

export default VidPlaylist;