import '../index.css';
import "../CSS/Dropdown.css";
import React, { useState } from 'react';

//title and uniqueID are strings, entries is a string array
function Dropdown({title, uniqueID, entries}) {
    const [selected, setSelected] = useState('');

    const handleSelectChange = (event) => {
      setSelected(event.target.value);
    };

  return (
    <div className='dropdown-container'>

    <select className='dropdown' name={title} id={uniqueID} onChange={handleSelectChange} value={selected}>
        <option value="" defaultValue={true} disabled hidden>{title}</option>
        {entries.map((entry, index) => (
            <option key={index} value={entry}>{entry}</option>
            ))}    
    </select>

    </div>
  );
}

export default Dropdown;