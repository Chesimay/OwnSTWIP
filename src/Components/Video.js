
import React, { useEffect, useRef } from 'react';

const Video = ({ videoId, onVideoEnd }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Load the YouTube player when component mounts
    const player = new window.YT.Player(playerRef.current, {
      height: '360',
      width: '640',
      videoId: videoId,
      events: {
        onStateChange: onPlayerStateChange,
      },
    });

    // Function to handle video player state change
    function onPlayerStateChange(event) {
      if (event.data === window.YT.PlayerState.ENDED) {
        onVideoEnd(); // Call the callback when video ends
      }
    }

    return () => {
      // Cleanup when component unmounts
      player.destroy();
    };
  }, [videoId, onVideoEnd]);

  return <div ref={playerRef}></div>;
};

export default Video;