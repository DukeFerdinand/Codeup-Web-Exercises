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
var rightOperand = document.getElementById("right-operand")
var numbers = document.getElementsByClassName("number");
var operators = document.getElementsByClassName("operators");

var box1;
var box2;
var theOperator;

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
	
	leftOperand.innerText += this.innerText;
	box1 = leftOperand.innerText;

//Adds clear funciton after first number is typed
	clear.addEventListener('click', clearNumbers);
	// console.log(box1);
	
}





//===========================================================================
//		This function inputs only one opertor into the middle span at a time
//===========================================================================



function stageOperation(){

	// console.log(this.innerText);
	leftOperand.innerText = '';
	leftOperand.innerText = this.innerText;

	if (operators !== ''){
		for (var i = 0; i < numbers.length ; ++i){

		numbers[i].removeEventListener('click', stageFirstNumber);
		numbers[i].addEventListener('click', stageSecondNumber);	
	


	}

}

	return operators = this.innerText

	// console.log(operator.innerText);

	


}


//=========================================================================
//		This function inputs the second operand
//=========================================================================

function stageSecondNumber(){
	if (leftOperand.innerText == '+' || leftOperand.innerText == '-' || leftOperand.innerText == '*' || leftOperand.innerText == '/'){
	leftOperand.innerText = '';
	}
	leftOperand.innerText += this.innerText;
	return box2 = leftOperand.innerText;
	// console.log(this.innerText);
	// console.log(box2);


}


//=========================================================================
//		This for loop adds event listeners to buttons for the operators
//=========================================================================


for (var k = 0; k < operators.length; ++k) {
	operators[k].addEventListener('click', stageOperation);


}

//=========================================================================
//		This Function should get the answer by analyzing the operator var
//=========================================================================


function getAnswer() {
	// console.log("It works!");
	switch (operators){
		case "+":
			// console.log(parseInt(box1) + parseInt(box2));
			leftOperand.innerText = (parseFloat(box1) + parseFloat(box2));
			break;
		case "-":
			leftOperand.innerText = (parseFloat(box1) - parseFloat(box2));
			break;
		case "*":
			leftOperand.innerText = (parseFloat(box1) * parseFloat(box2));
			break;
		case "/":
			leftOperand.innerText = (parseFloat(box1) / parseFloat(box2)).toFixed(2);
			break;
	}


	// for (i = 0; i < numbers.length ; ++i){
	// 	//removes the first Event Listener for the First Number
	// 	numbers[i].removeEventListener('click', stageSecondNumber);
	// 	//adds new Event Listener for Second Number
	// 	numbers[i].addEventListener('click', stageFirstNumber);

	// 	}
}



//=========================================================================
//		If answer is infinity
//=========================================================================

if (leftOperand.innerText == "Infinity") {
	leftOperand.innerText = "You broke the computer!";
}

//=========================================================================
//		This function should get the answer when equals is clicked
//=========================================================================



equals.addEventListener('click', getAnswer);



//=========================================================================
//		This Function Clears and returns the buttons to normal
//=========================================================================


function clearNumbers(){
	// console.log("clear!");
	leftOperand.innerText = '';
	// theOperator.innerText = '';
	// rightOperand.innerText = '';
	box1 = '';
	box2 = '';

	for (i = 0; i < numbers.length ; ++i){
		//removes the first Event Listener for the First Number
		numbers[i].removeEventListener('click', stageSecondNumber);
		//adds new Event Listener for Second Number
		numbers[i].addEventListener('click', stageFirstNumber);

		}
}












