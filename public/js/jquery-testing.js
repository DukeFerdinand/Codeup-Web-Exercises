"use strict";


var inputArray = [];
var konamiArray = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

$('html').keydown(function(e){
	switch (e.which) {
		//up
		case 38:
			console.log(38);
			inputArray.push(38);
			//return inputArray
			break;
		//down
		case 40:
			console.log(40);
			inputArray.push(40);
			//return inputArray
			break;
		//left
		case 37:
			console.log(37);
			inputArray.push(37);
			//return inputArray
			break;
		//right
		case 39:
			console.log(39);
			inputArray.push(39);
			//return inputArray
			break;
		//b
		case 66:
			console.log('b');
			inputArray.push(66)
			break;
		//a
		case 65:
			console.log('a');
			inputArray.push(65)
			break;
		//start
		case 13:
			console.log('Start');
			checkCode(inputArray, konamiArray);
			break;
	}
});


function checkCode(){
	if (inputArray.join('') == konamiArray.join('')) {
		changeThings();
		
	} else {
		alert("Failure, wrong code")
	}
	
	return inputArray = [];
}
function changeThings (){
	$('h1').css("display" , "none");
	$('span').css("display","initial");
	$('.sound').html("<audio autoplay><source src='/sounds/grossly_incandescent.mp3' type='audio/mpeg'>");
	
}