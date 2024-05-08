import '../index.css';
import "../CSS/ConditionTable.css";
import IconButton from "../Components/IconButton.js";
import ConditionSet from "../Components/ConditionSet.js";
import YouTube from 'react-youtube';
import React, { useState, useEffect } from 'react';
import PopUp from '../Components/PopUp';
import { useSettings } from '../Non-Component_JS_Files/SettingsContext';

function AddSong() {
    let palette = "light";

    const [url, setUrl] = useState('');
    const [vidKey, setVidKey] = useState('invalid url');
    const { settings, setSettings } = useSettings();
    const [conditionSets, setConditionSets] = useState([{ uniqueID: 1 }]);
    const [textCondSets, setTextCondSets] = useState(new Array(conditionSets));
    const [confirmPopup, setConfirmPopup] = useState(false);

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
            if (url.includes("music.youtube.com")) {
                setVidKey('YouTube Music url');
            }
            else if (url.includes("youtube.com/watch")) {
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
                setVidKey('YouTube Shorts url');
                //d. Playlist url. This should update vidKey to be "playlist url".
            } else if (url.includes("youtube.com/playlist")) {
                setVidKey('YouTube playlist url');
            } else {
                setVidKey('invalid url');
            }
            //console.log("vidKey is "+vidKey);
        };

        determineVideoId();
    }, [url]);

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        //console.log("new size");

        //1% of the parent viewport width (same as 1vw):
        var vw = innerWidth / 100;
        var width = 60 * vw;
        var height = width * 9.0 / 16.0;
        //console.log(width+", "+height);

        //assign width and height to the video frame
        const elm = document.getElementById('preview');
        if (elm != null) {
            elm.style.width = width + 'px';
            elm.style.height = height + 'px';
            //console.log("finished changing");
        }
        else {
            //console.log("could not find an element with the id 'preview'");
        }

        return { innerWidth, innerHeight };
    }

    //adds another condition set to conditionSets
    function increaseConditionSets() {
        const newConditionSets = [...conditionSets, { uniqueID: conditionSets.length + 1 }];
        setConditionSets(newConditionSets);
        setTextCondSets(new Array(newConditionSets.length));
    }

    //removes a condition set with the given uniqueID from the list
    //then adjusts each condition set in the list to have the numbers 1 - htmlCondSets.length
    function removeConditionSet(uniqueID) {
        const updatedConditionSets = conditionSets.filter(set => set.uniqueID !== uniqueID);
        setConditionSets(updatedConditionSets);
        setTextCondSets(new Array(updatedConditionSets.length));
    }


    function confirmAddition() {
        if (url.length == 0) {
            alert("Please enter a url in the bar.");
        }
        else if (vidKey.includes(" url")) {
            alert("Please enter a valid YouTube url in the bar. You have currently entered a(n) " + vidKey + ", which we cannot parse at this time.");
        }
        else {
            setConfirmPopup(true);
        }
    }

    //Produces a string that looks something like this in html:

    // your song xxx will be added and will play under these conditions:
    // {condition set 1} 
    // OR 
    // {condition set 2} 
    // OR 
    // ... {condition set n}
    function confirmText() {
        var toReturn = ["Your song "];
        toReturn[0] += url;
        toReturn[0] += " will be added and play under these conditions:";
        toReturn.push(<br />); toReturn.push(<br />);
        for (var i = 0; i < conditionSets; i++) {
            toReturn.push("{condition set " + (i + 1) + "}");

            if (i + 1 < conditionSets) {
                toReturn.push(<br />);
                toReturn.push("OR");
                toReturn.push(<br />);
            }
        }
        return toReturn;
    }


    return (
        <div className="page">
            {/* <div className='left-justified'>
                <p>Add Song</p>
                <p>Add Playlist</p>
            </div> */}
            <PopUp
                title={"Confirm Addition"}
                hidden={confirmPopup}
                setHidden={() => setConfirmPopup(false)}
                content={confirmText()}  //your song xxx will be added and will play under these conditions: {condition set 1} OR {condition set 2} OR ... {condition set n}
                onSave={"/"}
                type={"link"}
            />

            <div className='centered'>
                <div className="youtube-container">
                    <YouTube
                        id={"preview"}
                        videoId={vidKey}
                        style={{ borderRadius: 10, overflow: 'hidden' }}
                    />
                </div>

                <div className="input-container">
                    <input type="url" className="text-input" placeholder=" "
                        value={url} onChange={event => setUrl(event.target.value)}></input>
                    <span className="text-input-placeholder">Enter YouTube url here...</span>
                </div>

                <p>This song can play if <span style={{ fontWeight: "bold" }}>any</span> of the following condition sets are true:</p>


                {/* <ConditionSet uniqueID={1}/> */}
                {/* {htmlCondSets} */}
                <div className="condition-set-table">
                    {conditionSets.map(condSet => (
                        <div className="condition-set-row" key={condSet.uniqueID}>
                            <div className="condition-set-cell">
                                <ConditionSet uniqueID={condSet.uniqueID} />
                            </div>
                            {conditionSets.length > 1 && (
                                <div className="condition-set-cell tiny-button">
                                    <IconButton
                                        icon={'X'}
                                        text={""}
                                        palette={palette}
                                        onClick={() => removeConditionSet(condSet.uniqueID)}
                                    />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <IconButton icon={'plus'}
                    text={'Add Condition Set'}
                    palette={palette}
                    onClick={() => increaseConditionSets()}
                />
                <footer className='foot'>
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
                            onClick={() => confirmAddition()}></IconButton>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default AddSong;