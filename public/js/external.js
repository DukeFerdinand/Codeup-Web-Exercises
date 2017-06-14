"use strict";
console.log("hello from External JavaScript");


	var survey = confirm("Would you like to participate in our weekly color survey?");
	if (survey) {
		var color = prompt("What is your favorite color?");
		alert("Your favorite color is " + color + "? That's mine too!")
		console.log(color);
	} else {
		console.log("No survey from THAT guy :(")
		alert("Okay");
	}