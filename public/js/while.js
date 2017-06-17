"use strict";

// ================================================ Number Countdown

// var number = 2

// while (number <= 65536) {
// 	console.log(number);
// 	number = number * 2;
// }




// ================================================ Cones

// var allCones = Math.floor(Math.random() * 50) + 50;


// do {
// 	var cones = Math.floor(Math.random() * 5) + 1;

// 	if (cones <= allCones) {
// 		console.log("Woo! Sold " + cones + " cones!");
// 	} else {
// 		console.log("Sorry! I can't sell you "+ cones + " cones. I only have " + allCones + " left!");
// 	}

// 	allCones = allCones - cones;
// 	console.log(allCones);
// } while (allCones >= 0);




// ================================================= For.1
// var chosenNum = prompt("Please enter a number between 1 and 10");

// if (chosenNum >= 1 && chosenNum <= 10) {
// 	for (var i = 1; i <= 10; i++){
// 	var answer = (chosenNum * i);
// 	console.log(chosenNum + "*" + i + "=" + answer);
// 	}
// } else {
// 	alert("Please enter a valid number within 1-10");
// }


//================================================== For.2



// for (var i = 1; i<=100; i++) {

// var randomNum = Math.floor(Math.random() * 7000) + 20;

// 	if (randomNum % 2 == 0) {
// 		console.log(randomNum + " is even!");
// 	} else {
// 		console.log(randomNum + " is odd!");
// 	}

// }



// ============================================== For.3 FAAAAAAAAAAAAAAAAAAAIL


// for (var i = 1; i <= 10; i++){
// 	var k = "";
// 	for (var j = 1; j <= i; ++j){

// 		k+=i;
// 	}
// 	console.log(k);
// }



// ============================================== For.4

// for (var i = 100; i >=5; i -= 5){
// 	console.log(i);
// }


// ============================================== For.5
// 

var confirmMaybe = confirm("Will you help us with a FREEEEEEEE survey?")

if (confirmMaybe) {
	var userPrompt = prompt("Oi gimme an odd number less than 50 but more than 1");

	for (var i = 1; i <= 50; ++i){
		while ((userPrompt % 2 == 0) || (isNaN(userPrompt))) {
			userPrompt = prompt("gimme a real number")
		}
		 if (userPrompt == i) {
			console.log("Why is that number here? Skipping " + i);

		} else if (i % 2 == 0) {
			continue;
		} else {
			console.log("Here's a great odd number --> " + i);
		}
	}
} else {
	alert("YOU WIN");
}

































