//import rain from '../Images/rain_background.jpg';
import '../index.css';
import IconButton from "../Components/IconButton.js";
import IconDisplay from "../Components/IconDisplay.js";
import Carousel from '../Components/Carousel.js';
import useDate from "../TimeGetter.js";

function HomePage({background}) {
    //if background photo is in this enum
    let palette = "dark";
    //if it is in this other enum, let palette = "light";
    let timeyText = useDate(/* setting for military time */);

  return (
    <div className="page">
        <div className='left-justified'>
            <p>{timeyText[0]}</p>
        </div>
        <div className='centered'>
            <p>{timeyText[1]}</p>
            <h1>{timeyText[2]}</h1>

            <div className='evenly-spaced'>
                <IconDisplay 
                icon={'35'}
                text={'° F'}
                palette={palette}
                />
                <IconDisplay 
                icon={'Rain'}
                text={'Raining'}
                palette={palette}
                />
            </div>

            <div style={{width:"90%", padding:"1vw"}}>
                <div className='left-aligned'>

                <p>Select your current activity:</p>
                </div>
                <div className='centered'>
                        {/* In theory, these entries should be grabbed from the current account's settings db entry
                <Dropdown 
                title={"Current activity:"}
                uniqueID={"activity_selector"}
                entries={["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]}/>
                */}
                    <Carousel items={["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]} />
                </div>
            </div>

            <div className='evenly-spaced'>
                    <IconButton 
                    icon={'plus'}
                    text={'Add Song'}
                    palette={"dark"}
                    linkTo={"/add-song"}
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
