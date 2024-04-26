import React, { createContext, useContext, useState } from 'react';

const SettingsContext = createContext();

export const useSettings = () => useContext(SettingsContext);

export class Activity{
    constructor(id, name){
        this.name = name;
        this.id = id;
    }
    changeName(newName){
        this.name = newName;
    }
}

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
    get nextStartDate() {
        return this.rangeArr[0].startDate;
    }
    get nextEndDate() {
        return this.rangeArr[0].endDate;
    }
}

class Video {

    constructor(id) {
        const apiKey = ''; // Replace with actual API key

        this.id = id;
        this.title = "Not found";
        //this.title = this.fetchTitle().then;
    }


    async fetchTitle() {
        const url = `https://www.googleapis.com/youtube/v3/videos?id=${this.id}&key=${this.apiKey}&part=snippet`;
        try {
        const response = await fetch(url);
        const data = await response.json();
        // If the video exists and data is returned
        if (data.items && data.items.length > 0) {
            this.title = data.items[0].snippet.title;
          } else {
            console.log("vid not found");
            return "video not found";
          }
        } catch (error) {
            console.log('Error fetching video title:', error);
            return "ERROR";
        }
    }
}

export default function SettingsProvider({ children }) {
    const [settings, setSettings] = useState({
        // Your initial settings here
        seasons: [new Season("🎃 Spooky", true, [new DateRange(new Date(2024, 10, 10), new Date(2024, 11, 1, 3))])],
        activities: [new Activity(0,"🎧 Chilling"), new Activity(1,"🧑‍💻 Working"), new Activity(2,"🏃 Exercising"), 
                     new Activity(3, "🫧 Doing Chores"), new Activity(4, "💤 Sleeping"),new Activity(5, "🚋 In Transit")],
        currentActivity: 0,
        twentyFourHourClock: true,
        celsius: true,
        zipCode: -1,
        videoList: [new Video('_3ngiSxVCBs'), new Video('ddw_LOCXJmo'), new Video('In_06EmHhuk'), new Video('l9raQQ-ehH8'), new Video("B964fCAcbDU")] // Array of YouTube video IDs

    });

    return (
        <SettingsContext.Provider value={{ settings, setSettings }}>
            {children}
        </SettingsContext.Provider>
    );
};
