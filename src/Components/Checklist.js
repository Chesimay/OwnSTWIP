import React, { useState } from 'react';

const Checklist = ({ title, items }) => {
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
              <label>
                <input 
                  type="checkbox" 
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

  const getCheckedItems = () => {
    return Object.keys(checkedItems).filter(item => checkedItems[item]);
  };

  return (
    <div>
      <h2>{title}</h2>
      {renderChecklist(items)}
      <button onClick={() => alert(`Checked items: ${getCheckedItems().join(', ')}`)}>
        Get Checked Items
      </button>
    </div>
  );
};

export default Checklist;
