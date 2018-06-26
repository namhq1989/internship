//determine whether a given year is a leap year in the Gregorian calendar.
      var year = window.prompt();
      alert((isLeapYear(year)) ? year +' is a Leap Year' : year +' is not a Leap Year');
      function isLeapYear(year) {
        return (year % 100 ===0) ? (year % 400===0) : (year % 4 ===0);
      }
