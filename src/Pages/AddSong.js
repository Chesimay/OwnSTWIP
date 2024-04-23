import '../index.css';
import IconButton from "../Components/IconButton.js";
import IconDisplay from "../Components/IconDisplay.js";
import YouTube from 'react-youtube';
import React, {useState, useEffect} from 'react';


function AddSong() {
    let palette = "light";

    const [url, setUrl] = useState('');
    const [vidKey, setVidKey] = useState('invalid url');

    /*
    Activates whenever url changes, determines if url is a valid YouTube url and, 
     if so, what kind of url it is (of the following):
        a. Normal url. 
        b. Url with time key. 
        c. Shorts url. (we don't like this one)
        d. Playlist url. (we want to do something different with this one)

        ah crud there's more
        I dunno what I want to do with them
        
        e. Sharable url.
        f. Standard YouTube music url.
        g. YouTube music url from a playlist.

    Examples of typical YouTube addresses of each type:
        a. https://www.youtube.com/watch?v=O2ekiqL6Ijg
        b. https://www.youtube.com/watch?v=O2ekiqL6Ijg&t=1889s
        c. https://www.youtube.com/shorts/RVOhArgTqpc
        d. https://www.youtube.com/watch?v=CA7lXVqGwss&list=PLQRGN2qMt4-hPban-8n_Qo_toSzEFZJbV
        e. https://youtu.be/GPZYeLzDE-Y?si=QDcbzUEsspEPBrVs
        f. https://music.youtube.com/watch?v=cx3kVMB1fJA
        g. https://music.youtube.com/watch?v=q8m1i3lRiK0&list=PLQRGN2qMt4-ii04rzOh06Zmcm8kClkoRy
     */

    useEffect(() => {
        const determineVideoId = () => {
            //    1. Determine if url is a valid YouTube url. If not, it should update vidKey to be "invalid url"
            //    2. Determine which of the following types of YouTube url it is, then take steps accordingly.
            if (url.includes("youtube.com/watch")) {
                //        a. Normal url. This should take all characters after the string ?v= as the vidKey.
                const videoIdIndex = url.indexOf("?v=");
                if (videoIdIndex !== -1) { // (if ?v= doesn't exist, the url is invalid)
                    let vidKey = url.substring(videoIdIndex + 3);
                //        b. Url with time key. This should take all characters after the string ?v= AND before the string &t= as the vidKey.
                    const timeIndex = vidKey.indexOf("&t=");
                    if (timeIndex !== -1) {
                        vidKey = vidKey.substring(0, timeIndex);
                    }
                    //    3. In case a or b, it should update videoId of the <YouTube> component with the id "preview" to be equal to vidKey.
                    // behavior shared by time key & normal url
                    setVidKey(vidKey);
                } else {
                    setVidKey('invalid url');
                }
            //c. Shorts url. This should update vidKey to be "shorts url".
            } else if (url.includes("youtube.com/shorts")) {
                setVidKey('shorts url');
            //d. Playlist url. This should update vidKey to be "playlist url".
            } else if (url.includes("youtube.com/playlist")) {
                setVidKey('playlist url');
            } else {
                setVidKey('invalid url');
            }
            //console.log("vidKey is "+vidKey);
        };

        determineVideoId();
    }, [url]);

    window.addEventListener('load',function(){
        initializeV();
        function initializeV(){
                //1% of the parent viewport width (same as 1vw):
                var vw = window.parent.innerWidth/100;
                var width = 60*vw;
                var height = width* 9.0 / 16.0;
    
                //assign width and height to the video frame
                document.getElementById('preview').style.width = width+'px';
                document.getElementById('preview').style.height = height+'px';
        }
    
        window.parent.addEventListener('resize',function(){
              //when the browser window is resized; recalculate
              initializeV();
        });
    });

    return (
        <div className="page">
            <div className='left-justified'>
                <p>Add Song</p>
                <p>Add Playlist</p>
            </div>
            <div className='centered'>
                <YouTube
                    id={"preview"}
                    videoId={vidKey}
                    style={{ borderRadius: 10, overflow: 'hidden',  position: "50%" }}
                />
                <div class="input-container">
                    <input type="text" class="text-input" placeholder=" "
                    value={url} onChange={event => setUrl(event.target.value)}></input>
                    <span class="text-input-placeholder">Enter YouTube url here...</span>
                </div>

                <p>This song can play if <span style={{ fontWeight: "bold" }}>any</span> of the following condition sets are true:</p>
                <div className='evenly-spaced'>
                    <IconButton
                        icon={'X'}
                        text={'Quit'}
                        palette={palette}
                        linkTo={"/"}></IconButton>

                    <IconButton
                        icon={'check'}
                        text={'Add Song'}
                        palette={palette}
                        linkTo={"/"}></IconButton>
                </div>
            </div>
        </div>
    );
}

export default AddSong;
