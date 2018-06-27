// the program takes a random integer between 1 to 10, the user is then prompted
// to input a guess number. If the user input matches with guess number,
// the program will display a message "Good Work" otherwise display a message "Not matched"
      var input = window.prompt();
      var rand = Math.floor((Math.random() * 10) + 1);
      console.log('Random number: '+rand);
      if (input==rand) {
        alert('Good Work');
      } else {
        alert('Not matched');
      }
