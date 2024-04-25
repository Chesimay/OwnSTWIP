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
        return this.rangeArr[0].startDate;
    }
    get nextEndDate(){
        return this.rangeArr[0].endDate;
    }
  }

  class Video{
    
   constructor(id){
    const apiKey = 'YOUR_API_KEY'; // Replace with actual API key
    
    this.id = id;
    $.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${apiKey}`, function(data) {
        this.title = data.items[0].snippet.title;
    });
    
   } 
  }

export default function SettingsProvider ({ children })
{
  const [settings, setSettings] = useState({
    // Your initial settings here
    seasons : [new Season("🎃 Spooky", true, [new DateRange(new Date(2024, 10, 10), new Date(2024, 11, 1, 3))])],
    activities: ["🎧 Chilling", "🧑‍💻 Working", "🏃Exercising", "🫧 Doing Chores", "💤 Sleeping", "🚋 In Transit", "I'm an idiot🦭"],
    twentyFourHourClock : true,
    celsius: true,
    zipCode: -1,
    videoList:  [ new Video('_3ngiSxVCBs'), new Video('ddw_LOCXJmo'), new Video('In_06EmHhuk'), new Video('l9raQQ-ehH8')] // Array of YouTube video IDs

  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};
