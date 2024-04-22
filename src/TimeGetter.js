import React from 'react';

export default function useDate (twelve=true) {
    const [today, setDate] = React.useState(new Date()); // Save the current date to be able to trigger an update

    React.useEffect(() => {
        const timer = setInterval(() => { // Creates an interval which will update the current data every minute
        // This will trigger a rerender every component that uses the useDate hook.
        setDate(new Date());
      }, (60 - today.getSeconds()) * 1000);
      //console.log("Seconds are "+today.getSeconds()+" and I'm waiting for "+((60 - today.getSeconds()) * 1000)+"ms");
      return () => {
        clearInterval(timer); // Return a funtion to clear the timer so that it will stop being called on unmount
      }
    }, []);
        

    const locale = 'en';
  
    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.toLocaleDateString(locale, { month: 'long' })} ${today.getDate()}${(today.getDate()%10 == 1 && 'st') || (today.getDate()%10 == 2 && 'nd') || (today.getDate()%10 == 3 && 'rd') || 'th'}\n\n`;
  
    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'morning') || (hour < 17 && 'afternoon') || 'evening'}! It's `;
  
    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: twelve, minute: 'numeric' });
  
    return [
        wish,
        date,
        time];
  };