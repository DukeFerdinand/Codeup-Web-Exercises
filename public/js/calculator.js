/*
 _______  _______  _        _______           _        _______ _________ _______   
(  ____ \(  ___  )( \      (  ____ \|\     /|( \      (  ___  )\__   __/(  ____ \  
| (    \/| (   ) || (      | (    \/| )   ( || (      | (   ) |   ) (   | (    \/  
| |      | (___) || |      | |      | |   | || |      | (___) |   | |   | (__      
| |      |  ___  || |      | |      | |   | || |      |  ___  |   | |   |  __)     
| |      | (   ) || |      | |      | |   | || |      | (   ) |   | |   | (        
| (____/\| )   ( || (____/\| (____/\| (___) || (____/\| )   ( |   | |   | (____/\  
(_______/|/     \|(_______/(_______/(_______)(_______/|/     \|   )_(   (_______/  
                                                                                   
				  _________         _________ _______                                                
				  \__   __/|\     /|\__   __/(  ____ \                                               
				     ) (   | )   ( |   ) (   | (    \/                                               
				     | |   | (___) |   | |   | (_____                                                
				     | |   |  ___  |   | |   (_____  )                                               
				     | |   | (   ) |   | |         ) |                                               
				     | |   | )   ( |___) (___/\____) |                                               
				     )_(   |/     \|\_______/\_______)                                               
				                                                                                     
*/


	"use strict";

//=========================================================================
// 		Some Variables
//=========================================================================

var equals = document.getElementById("answer");
var clear = document.getElementById("C");
var leftOperand = document.getElementById("left-operand");
var theOperator = document.getElementById("operator");
var rightOperand = document.getElementById("right-operand")
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operators");

var box1;
var box2;


//=========================================================================
//	This for loop assigns "clickability" to each NUMBERED button only
//=========================================================================


for (var i = 0; i < numbers.length ; ++i){

	 numbers[i].addEventListener('click', stageFirstNumber);


}

//=========================================================================
//		This function inputs the number to the first operand
//=========================================================================


function stageFirstNumber() {
	// console.log(this.innerText);
	leftOperand.innerText += this.innerText;
	box1 = leftOperand.innerText;

//Adds clear funciton after first number is typed
	clear.addEventListener('click', clearNumbers);
	// console.log(box1);
}



//=========================================================================
//		This function inputs the second operand
//=========================================================================

function stageSecondNumber(){
	
	rightOperand.innerText += this.innerText;
	box2 = rightOperand.innerText;
	// console.log(this.innerText);
	// console.log(box2);


}


//=========================================================================
//		This for loop adds event listeners to buttons for the operators
//=========================================================================


for (var k = 0; k < operators.length; ++k) {
	operators[k].addEventListener('click', stageOperation);

}



//===========================================================================
//		This function inputs only one opertor into the middle span at a time
//===========================================================================



function stageOperation(){
	if (leftOperand == '') {
		alert("Please enter a number before stating an operator!");
	} else {
		// console.log(this.innerText);
		theOperator.innerText = this.innerText;
	
	for (i = 0; i < numbers.length ; ++i){
		//removes the first Event Listener for the First Number
		numbers[i].removeEventListener('click', stageFirstNumber);
		//adds new Event Listener for Second Number
		numbers[i].addEventListener('click', stageSecondNumber);

		}
	operators = this.innerText
	// console.log(operator.innerText);

	}


}


//=========================================================================
//		This Function should get the answer by analyzing the operator var
//=========================================================================


function getAnswer() {
	// console.log("It works!");
	switch (operator.innerText){
		case "+":
			// console.log(parseInt(box1) + parseInt(box2));
			leftOperand.innerText = "Answer is " + parseFloat(parseFloat(box1) + parseFloat(box2));
			break;
		case "-":
			leftOperand.innerText = "Answer is " + parseFloat(parseFloat(box1) - parseFloat(box2));
			break;
		case "*":
			leftOperand.innerText = "Answer is " + parseFloat(parseFloat(box1) * parseFloat(box2));
		case "/":
			leftOperand.innerText = "Answer is " + parseFloat(parseFloat(box1) / parseFloat(box2)).toFixed(2);
	}
}



//=========================================================================
//		This Function should get the answer when equals is clicked
//=========================================================================



equals.addEventListener('click', getAnswer);



//=========================================================================
//		This Function Clears and returns the buttons to normal
//=========================================================================


function clearNumbers(){
	// console.log("clear!");
	leftOperand.innerText = '';
	theOperator.innerText = '';
	rightOperand.innerText = '';

	for (i = 0; i < numbers.length ; ++i){
		//removes the first Event Listener for the First Number
		numbers[i].removeEventListener('click', stageSecondNumber);
		//adds new Event Listener for Second Number
		numbers[i].addEventListener('click', stageFirstNumber);

		}
}














