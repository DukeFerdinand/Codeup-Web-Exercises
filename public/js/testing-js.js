//=========================================================
//		Test for Negative
//=========================================================

function isNegative(num){
	if (num < 0) {
		alert(true);
	} else {
		alert(false);
	}
};

//=========================================================
//		Average these Numbers
//=========================================================


var averageThese = [5, 10, 15, 20, 25];

function average(averageThese) {
	var answer = 0;
	for (var i = 0; i < averageThese.length; i ++){
		answer = answer + parseInt(averageThese[i]);
		console.log(answer);
	}
		console.log((answer / (averageThese.length)).toFixed(2));
}


//=========================================================
//		Count the Odd Numbers
//=========================================================


var countThese = [1, 2, 3, 5, 7, 8, 10]

function countOdds(countThese) {
var odds = 0;
	for (var j = 0; j < countThese.length; j++) {
		// console.log(countThese[j]);
		if (countThese[j] % 2 != 0 ){
			odds = odds + 1
		}
	}
	console.log(odds);
}

//=========================================================
//		Convert Name to Object
//=========================================================

//Doesn't NEED to be in this order, just helps me understand the process

//Input
var name = "First Last";
var nameArray;

//uses input
function convertNameToObject(name) {
	//split the strinng "First Last" into an array
	nameArray = name.split(" ");
	var tempFirstName = nameArray[0];
	var tempLastName = nameArray[1];
	//return it so it's usab;e elsewhere
	return nameArray = [tempFirstName, tempLastName];

}
convertNameToObject(name);
/*	Calling the function because JS console freaked out that nameArray was undefined otherwise.
	This Likely wouldn't be a problem if I used a prompt, but we're only supposed to show basic functionality
	so I focused on that.
*/


var nameObject = {
	firstName: nameArray[0],
	lastName: nameArray[1]
}

//=========================================================
//		Last Name to Upper Case
//=========================================================

//Didn't get to this one, spent too long on the last one






