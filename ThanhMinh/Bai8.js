/*. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".*/
			var number = Math.ceil(Math.random()*10);
			var gnum= prompt("Guess the number between 1 and 10 inclisive");
			if(gnum == number)
				alert("Matched");
			else
				alert("No Matched, the number was "+number);

