import React, { useState } from 'react';
import "../CSS/Checklist.css";
import "../index.css";

const Checklist = ({ title, items, columns = 1 }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (item, isChecked) => {
    const newCheckedItems = { ...checkedItems };

    const updateNestedItems = (nestedItems) => {
      nestedItems.forEach(nestedItem => {
        if (Array.isArray(nestedItem)) {
          updateNestedItems(nestedItem);
        } else {
          newCheckedItems[nestedItem] = isChecked;
        }
      });
    };

    newCheckedItems[item] = isChecked;

    const currentItemIndex = items.findIndex(i => i === item);
    if (currentItemIndex < items.length-1 && Array.isArray(items[currentItemIndex + 1])) {
      updateNestedItems(items[currentItemIndex + 1]);
    }

    setCheckedItems(newCheckedItems);
  };

  const renderChecklist = (items, depth = 0) => {
    return (
      <ul className="checklist" style={{ paddingLeft: `${depth * 20}px` }}>
        {items.map((item, index) => (
          <li key={index}>
            {Array.isArray(item) ? (
              renderChecklist(item, depth + 1)
            ) : (
              <label className='checkbox-and-label'>
                <input 
                  type="checkbox" 
                  className='checkbox'
                  checked={checkedItems[item] || false}
                  onChange={(e) => handleCheckboxChange(item, e.target.checked)}
                />
                {item}
              </label>
            )}
          </li>
        ))}
      </ul>
    );
  };

  if(columns >= 2){
    const halfIndex = Math.ceil(items.length / 2);
    const itemsFirstHalf = items.slice(0, halfIndex); 
    const itemsSecondHalf = items.slice(halfIndex, items.length);
    
    return (
        <div>
          <h2>{title}</h2>
          <div className='evenly-spaced'>
          {renderChecklist(itemsFirstHalf)}
          {renderChecklist(itemsSecondHalf)}
          </div>
        </div>
      );
  }

  return (
    <div>
      <h2>{title}</h2>
      {renderChecklist(items)}
    </div>
  );
};

export default Checklist;