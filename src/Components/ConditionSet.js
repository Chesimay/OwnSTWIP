import '../index.css';
import "../CSS/ConditionSet.css";
import React, { useState } from 'react';
import Checklist from './Checklist';
import PopUp from './PopUp';
import IconButton from './IconButton';

function ConditionSet({title, uniqueID, entries}) {
    const [selected, setSelected] = useState('');
    const [lowTemp, setLowTemp] = useState();
    const [highTemp, setHighTemp] = useState();
    const [activityPopup, setActivityPopup] = useState(false);
    const [seasonPopup, setSeasonPopup] = useState(false);
    const [activities, setActivities] = useState(["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"]);
    const [seasons, setSeasons] = useState(["🎃 Spooky"]);


    const handleSelectChange = (event) => {
      setSelected(event.target.value);
    };

    const twelve = ["12 AM","1 AM","2 AM", "3 AM", "4 AM", "5 AM", "6 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM","12 PM","1 PM","2 PM","3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM"];
    const twentyfour = ["00","01","02", "03", "04", "05", "06", "07", "08", "09", "10", "11","12","13","14","15", "16", "17", "18", "19", "20", "21", "22", "23"];
  return (
    <div className='dropdown-container'>
        <PopUp 
            title={"Add Activity"}
            hidden={activityPopup}
            setHidden={() => setActivityPopup(false)}
            onSave={(name) => {setActivities([...activities, name]); console.log("testing, adding "+name+"...");}}
            type={"activity"}
        />
        <PopUp 
            title={"Add Season"}
            hidden={seasonPopup}
            setHidden={() => setSeasonPopup(false)}
            onSave={(name) => {setActivities([...activities, name]); console.log("testing, adding "+name+"...");}}
            type={"calendar"}
        />

    <select className='dropdown' name={title} id={uniqueID} onChange={handleSelectChange} value={selected}>
        <option value="" defaultValue={true} disabled hidden>{title}</option>
         
    </select>
    <Checklist 
    title={"Solar Day"}
    items={["🏙️ Daylight", "🌃 Night", "🌇 Twilight", ["Sunrise Twilight", "Sunset Twilight"]]} />
    <Checklist 
    title={"24-Hour Day"}
    items={twelve}
    columns={2} />

    <Checklist 
    title={"Meteorological Season"}
    items={["🌱 Spring", "🏖️ Summer", "🍁 Autumn", "⛄ Winter"]} />

    <Checklist 
    title={"Month"}
    items={["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"]} 
    columns={2}/>
    
    <Checklist 
    title={"Weekday"}
    items={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]}
    columns={2} 
    />

    <h2>Temperature Range</h2>
    <div className='evenly-spaced'>
        <div className='evenly-spaced' style={{flexGrow: "1", width:"40%"}}>
            <div className="input-container">
                <input type="number" className="text-input" placeholder=" " step = ".01"
                value={lowTemp} onChange={event => setLowTemp(event.target.value)} style={{flexGrow: "1", width:"80%"}}></input>
                <span className="text-input-placeholder">Low</span>
            </div>
            <p>°F</p>
        </div>
        <p style={{flexGrow: "3", width: "20%"}}>&emsp; - &emsp;</p>
        <div className='evenly-spaced' style={{flexGrow: "1", width:"40%"}}>
            <div className="input-container">
                <input type="number" className="text-input" placeholder=" " step = ".01"
                value={highTemp} onChange={event => setHighTemp(event.target.value)}></input>
                <span className="text-input-placeholder">High</span>
            </div>
            <p>°F</p>
        </div>
    </div>

    <div style={{justifyContent:"space-between", width: "90%", display:"flex", alignItems: "top"}}> 
        <Checklist 
        title={"Activity"}
        items={activities}
        columns={1} /* was Math.ceil(activities.length/6.0), but the follow div would need to be absolute to make it work */ 
        />
        <div className="small-button" style={{padding:"10px", flexGrow: 1,alignContent: "top", justifyContent: 'right'}}>
            <IconButton 
            icon={"plus"}
            text={"Add Activity"}
            palette={"dark"}
            onClick={() => setActivityPopup(true)}
            />
        </div>
    </div>
    

    </div>
  );
}

export default ConditionSet;