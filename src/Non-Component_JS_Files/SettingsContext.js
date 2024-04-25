import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

class DateRange {
    constructor(start, end) {
        this.startDate = start;
        this.endDate = end;
      }
}

class Season {
    constructor(name, repeatsYearly, rangeArr) {
      this.name = name;
      this.repeatsYearly = repeatsYearly;
      this.rangeArr = rangeArr;
      this.firstDate = rangeArr[0].startDate;
      this.endDate = rangeArr[0].endDate;
    }
  }

export default SettingsProvider ({ children })
{
  const [settings, setSettings] = useState({
    // Your initial settings here
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
