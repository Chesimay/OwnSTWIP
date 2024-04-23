import '../index.css';
import "../CSS/ConditionSet.css";
import React, { useState } from 'react';
import Checklist from './Checklist';

function ConditionSet({title, uniqueID, entries}) {
    const [selected, setSelected] = useState('');

    const handleSelectChange = (event) => {
      setSelected(event.target.value);
    };

  return (
    <div className='dropdown-container'>

    <select className='dropdown' name={title} id={uniqueID} onChange={handleSelectChange} value={selected}>
        <option value="" selected disabled hidden>{title}</option>
         
    </select>
    <Checklist 
    title={"Solar Day"}
    items={["🏙️ Daylight", "🌃 Night", "🌇 Twilight", ["Sunrise Twilight", "Sunset Twilight"]]} />

    </div>
  );
}

export default ConditionSet;