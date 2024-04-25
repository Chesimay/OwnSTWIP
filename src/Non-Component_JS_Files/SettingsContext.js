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
    }
    get nextStartDate(){
        return rangeArr[0].startDate;
    }
    get nextEndDate(){
        return rangeArr[0].endDate;
    }
  }

export default SettingsProvider ({ children })
{
  const [settings, setSettings] = useState({
    // Your initial settings here
    seasons : [new Season("🎃 Spooky", true, [new DateRange(new Date(2024, 10, 10), new Date(2024, 11, 1, 3))])],
    activities: ["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit"],
    twentyFourHourClock : true,
    celsius: true,
    zipCode: -1
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
