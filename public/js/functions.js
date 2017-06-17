"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 *  > sayHello("codeup") // returns "Hello, codeup!"
 */



 /* ======================================================== Says Hello
	========================================================
 */


// var myNameIs = prompt("What is your name?");
//  	function saysHello(myNameIs) {
//  		return "Hello, " + myNameIs + "!";
//  	}

//  	// console.log(saysHello(name));
// *
//  * TODO:
//  * Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
//  * Store the result of the function call in a variable named 'helloMessage'.
//  * console.log 'helloMessage' to check your work
 

// var helloMessage = saysHello(myNameIs);

// console.log(helloMessage);





// Don't modify the following line, it generates a random number between 1 and
// 100 and stores it in a variable named random
// var random = Math.floor((Math.random() * 100) + 1);

/**
 * TODO:
 * Create a function called 'isOdd' that takes a number as a parameter.
 * The function should use the ternary operator to return a message.
 * The message should contain the number being checked, and whether or not the
 * number is odd
 *
 * Example
 *  > isOdd(42) // returns "42 is not odd!"
 *
 * Call the function 'isOdd' passing the variable 'random' as a parameter.
 * console.log *outside of the function* to check your work
 */
// ====================================================================================Is Odd
// ====================================================================================
// var number = prompt("Pick a number!")

// function isOdd(number) {
// 	return number % 2 != 0 ? number + " is odd!" : number + " is even!"
// }

// console.log(isOdd(number))




/**
 * TODO: Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant
 *
 * the function should accept a tip percentage and the total of the bill, and
 * return the amount to tip
 *
 * Example
 *  > calculateTip(0.20, 20) // returns 4
 */
// var price = prompt("How much was your meal?");
// var tip = prompt("How much would you like to tip?");
 
// function calcTip(price, tip) {
// 		return "You should tip $" + (price * tip).toFixed(2);
// }

// alert(calcTip(price, tip));
/**
 * TODO: use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Function (Input)
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function identity(input) {
// 	return input;
// }
// alert(identity("hello"));


// +++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//getRandomNumber 
// +++++++++++++++++++++++++++++++++++++++++++++++++++++ 


// var random;

// function getRandomnumber(min,max) {
// 	random = Math.floor((Math.random() * (max - min)) + min);
// 	return random + " is your number!";

// }

// console.log(getRandomnumber(3,12));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//First Letter of String
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var string;
// do {
// 	string = prompt("Please enter a word longer than one character");

// }while (string.length < 2);

// function getFirst(string) {
// 	return string.toString().charAt(0);
// }
// console.log(getFirst(string));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Last Letter of String
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var string;

// do {
// 	string = prompt("Please enter a word longer than one character long");
// } while (string.length < 1)

// function getLast(string) {
// 	return string.toString().substring(string.length -1);
// }
//  console.log(getLast(string));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Everything BUT First Letter of String
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// var string;

// do {
// 	string = prompt("Please enter a word longer than two letters");
// } while (string.length <= 2);

// function getRestOfString(string) {
// 	return string.toString().substring(1);
// }
// console.log(getRestOfString(string));

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Reversed String
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 // var string;

 // do {
 // 	string = prompt("Please enter a word longer than one character");
 // } while (string.length <=1);

 // function reverseString(string) {
 // 	return string.split("").reverse().join("");
 // }

 // console.log(reverseString(string));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                  Is a Number Numeric?				  //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// var numberChoice = prompt("Please enter a number")

// function numGet(numberChoice) {
// 	if (isNaN(numberChoice)) {
// 		return false;
// 	} else {
// 		return true;
// 	}
// }

// alert(numGet(numberChoice));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                Count Function Ha, Ha, Ha!			  //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// var string;

// do {
// 	string = prompt("Please enter a word longer than 1 character");
// } while (string.length <=1);

// function theCount(string) {
// 	return string.toString().length;
// }

// console.log(theCount(string) +" letters! ha, ha, ha");



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                  Add number 							  //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

// var a;
// var b;

// do {
// 	a = prompt("Please enter number 1 of 2");
// 	b = prompt("Please enter number 2 of 2");
// 	if (isNaN(a) || isNaN(b) ){
// 		alert("Please enter a real number!")
// 	}
// } while (isNaN(a) && isNaN(b));

// function addEmUp(a, b) {
// 	return parseInt(a) + parseInt(b);
// }

// console.log(addEmUp(a,b));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                  Sub. number 						  //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//



// var a;
// var b;

// do {
// 	a = prompt("Please enter number 1 of 2");
// 	b = prompt("Please enter number 2 of 2");
// 	if (isNaN(a) || isNaN(b) ){
// 		alert("Please enter a real number!")
// 	}
// } while (isNaN(a) && isNaN(b));

// function addEmUp(a, b) {
// 	return parseInt(a) - parseInt(b);
// }

// console.log(addEmUp(a,b));


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//                  Math 								  //
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
var a;
var b;
var method;


do {
	a = prompt("Please enter whole number 1 of 2");
	if (isNaN(a)){
		alert("Please enter a proper whole number!");
		continue;
	}
	b = prompt("Please enter whole number 2 of 2");
	if (isNaN(b) ){
		alert("Please enter a proper whole number!")
	}
} while (isNaN(a) || isNaN(b));
 
do {
	method = prompt("Would you like to multiply, divide, add, or subtract?");
	console.log(method);

function addEmUp(a, b) {
	alert("Your total is " + (parseInt(a) + parseInt(b)));
	return parseInt(a) + parseInt(b);
}

function subTriFuge(a, b) {
	alert("Your total is " + (parseInt(a) + parseInt(b)));
	return parseInt(a) - parseInt(b);
}

function divideAndConquer(a, b) {
	alert("Your total is " + (parseInt(a) / parseInt(b)));
	return parseInt(a) / parseInt(b);
}

function multiplyYourAssets(a, b) {
	alert("Your total is " + (parseInt(a) * parseInt(b)));
	return parseInt(a) * parseInt(b);
}


	switch (method.toLowerCase()) {
		case "multiply":
			console.log(multiplyYourAssets(a,b));
			break;
		case "divide":
			console.log(divideAndConquer(a,b));
			break;
		case "add":
			console.log(addEmUp(a,b));
			break;
		case "subtract":
			console.log(subTriFuge(a,b));
			break;
	}
	if (method == "multiply" || method == "divide" || method == "add" || method == "subtract"){
		break;
	}
} while (method != "multiply" || method != "divide" || method != "add" || method != "subtract")

