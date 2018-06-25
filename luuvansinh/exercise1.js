// display the current day and time in the following format:
// Sample Output : Today is : Tuesday. 
// Current time is : 10 PM : 30 : 38
      var today = new Date();
      var day = today.getDay();
      var dayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
      console.log("Today is: "+ dayList[day]);

      var hour = today.getHours();
      var minute = today.getMinutes();
      var second = today.getSeconds();
      var prepand = (hour >= 12)? " PM ":" AM ";

      hour %=12 ;
      if (hour===0 && prepand===" PM ") {
        hour = 12;
        prepand = (minute===0 && second===0) ? " NOON " : " PM ";
      }
      if (hour===0 && prepand===" AM ") {
        hour = 0;
        prepand = (minute===0 && second===0) ? " MIDNIGHT " : " AM ";
      }
      console.log("Current Time : "+hour + prepand + " : " + minute + " : " + second);
