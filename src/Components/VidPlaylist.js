import React, { useState } from 'react';
import YouTube from 'react-youtube';
const VidPlaylist = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoIds = ['_3ngiSxVCBs', '0FCvzsVlXpQ', 'ddw_LOCXJmo']; // Array of YouTube video IDs

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
    <div>
        <button onClick={handleVideoEnd}>⏭</button>
      <YouTube
        videoId={videoIds[currentVideoIndex]}
        onEnd={handleVideoEnd}
        opts={{ width: '640', height: '360',
        playerVars: {
            autoplay: 1,
          }, }}
      />
    </div>
  );
};

export default VidPlaylist;