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

var clear = document.getElementById("C");
var decimal = document.getElementById("decimal");
var equals = document.getElementById("answer");
var leftOperand = document.getElementById("left-operand");
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operators");
var rightOperand = document.getElementById("right-operand");


//=========================================================================
// These take the value of whatever the user types
//=========================================================================


var box1 = '';
var box2 = '';


//=========================================================================
// 		For loop adds event listener for first number
//=========================================================================


for (var i = 0; i < numbers.length ; ++i){

	 numbers[i].addEventListener('click', stageFirstNumber);


}

//=========================================================================
//		This function inputs the number to the first operand
//=========================================================================


function stageFirstNumber() {
	
	leftOperand.innerText += this.innerText;
	box1 = leftOperand.innerText;

//Adds clear funciton after first number is typed
	
	console.log(box1);
	
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

	if (box1 != ''){
	// console.log(this.innerText);
	leftOperand.innerText = '';
	leftOperand.innerText = this.innerText;
	}
	if (operators !== ''){
		for (var i = 0; i < numbers.length ; ++i){

		numbers[i].removeEventListener('click', stageFirstNumber);
		numbers[i].addEventListener('click', stageSecondNumber);	
		}
	}
	console.log(operators.value);
	return operators = this.innerText;


}


//=========================================================================
//		This function inputs the second operand
//=========================================================================

function stageSecondNumber(){
	if (leftOperand.innerText == '+' || leftOperand.innerText == '-' || leftOperand.innerText == '*' || leftOperand.innerText == '/'){
	leftOperand.innerText = '';
	}
	if (box1 != ''){
	leftOperand.innerText += this.innerText;

	box2 = leftOperand.innerText;
	console.log(box2);
	
	}
	
}


//=========================================================================
//		Decimal Function
//=========================================================================

function addDecimal(){
	if (leftOperand.innerText == '+' || leftOperand.innerText == '-' || leftOperand.innerText == '*' || leftOperand.innerText == '/'){
	leftOperand.innerText = '';
	}
	if (leftOperand.innerText.indexOf('.') == -1) {
		leftOperand.innerText += '.';
	}
	
}

//=========================================================================
//		Add Event Listener for Equals and Decimal
//=========================================================================


decimal.addEventListener('click', addDecimal);
equals.addEventListener('click', getAnswer);


//=========================================================================
//		Clears the Operator for continued operations
//=========================================================================
function clearOp(){
	operators = '';
}

//=========================================================================
//		This Function should get the answer by analyzing the operator var
//=========================================================================


function getAnswer() {

	if (box1 != '' && box2 != '' && operators != ''){
	// console.log("box 1 is " + box1);
	// console.log("box 2 is " + box2);

	switch (operators){
		case "+":
			
			box1 = (parseFloat(box1) + parseFloat(box2));
			
			leftOperand.innerText = box1.toFixed(2);
			

			break;
		case "-":
			box1 = (parseFloat(box1) - parseFloat(box2));
			leftOperand.innerText = box1.toFixed(2);
			
			
			break;
		case "*":
			box1 = (parseFloat(box1) * parseFloat(box2));
			leftOperand.innerText = box1.toFixed(2);
			

			break;
		case "/":
			box1 = (parseFloat(box1) / parseFloat(box2));
			leftOperand.innerText = box1.toFixed(2);
			

			break;
		}
	}
}



//=========================================================================
//		This Function Clears and returns the buttons to normal
//=========================================================================

clear.addEventListener('click', clearNumbers);
function clearNumbers(){
	// console.log("clear!");
	leftOperand.innerText = '';
	box1 = '';
	box2 = '';

	for (i = 0; i < numbers.length ; ++i){
		//removes the first Event Listener for the First Number
		numbers[i].removeEventListener('click', stageSecondNumber);
		//adds new Event Listener for Second Number
		numbers[i].addEventListener('click', stageFirstNumber);

		}
}

















