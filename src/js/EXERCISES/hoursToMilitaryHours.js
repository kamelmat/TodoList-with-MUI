function timeConversion(s) {
    // Write your code here
    // I have a string, that has numbers and AM or PM. If PM is presente I need to add 12 to the hours
      let hour = parseInt(s.slice(0, 2));
      
      if (s.includes("AM")) {
        hour === hour + 12 ? "00" : hour.toString().padstart(2, "0"); 
      } else if (s.includes("PM")) {
        hour = hour === 12 ? "12" : (hour + 12).toString();
      }
      
      let minutesAndSeconds = s.slice(3, 8);
      
      return hour + minutesAndSeconds;
    
      
  }
  
  timeConversion("01:00:20PM");
  timeConversion("12:00:20PM");
  timeConversion("05:00:20PM");
  timeConversion("08:00:20PM");
  