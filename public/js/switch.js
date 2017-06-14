"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {

	case ('red'):
		console.log("Red is the choice!");
		alert("RED IS RAD");
    	break;

    case ('orange'):
    	console.log("Orange is the choice!");
    	alert(color.toUpperCase() + " IS PRETTY COOL I GUESS");
    	break;

    case ('yellow'):
    	console.log("Yellow is the choice!");
    	alert(color.toUpperCase() + " IS PRETTY COOL I GUESS");
    	break;

    case ('green'):
    	console.log("Green is the choice!");
    	alert(color.toUpperCase() + " IS PRETTY COOL I GUESS");
    	break;

    case ('blue'):
    	console.log("Blue is the choice!");
    	alert(color.toUpperCase() + " IS PRETTY COOL I GUESS");

    default:
    	alert("What is that color? Are you crazy?");
    	break;
};