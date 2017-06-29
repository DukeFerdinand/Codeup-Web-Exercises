//Problem 1 ========================================
function isNegative(numToTest){
	if (numToTest < 0 ){
		return true;
	} else { 
		return false;
	}
}

//Alternate :

// function isNegative(numToTest){
// 	return numToTest < 0;
// }


//Problem 2==========================================

function averageThese(arrayOfNumbers){
	var average = 0;
	for (var i = 0; i < arrayOfNumbers.length; i++){
		//Adds current iteration of the given array to the total
		average = arrayOfNumbers[i] + average;
	}
		//divides the completed sum by the amount of numbers in the given array
		return average / arrayOfNumbers.length;
}



//Problem 3 ==========================================

function countTheOdds(oddArrayHere){
	var oddCount = 0;
	for (var i = 0; i < oddArrayHere.length; i++) {
		if (oddArrayHere[i] % 2 != 0){
			//adds an odd for each odd the for loop finds
			oddCount = oddCount + 1;
		}
	}
	
	return oddCount;
}

//Problem 4 ============================================

function convertToObject(nameHere){
	var nameObject = {};

	//splits the string to an array and assigns properties for nameObject
	nameHere = nameHere.split(" ");
	nameObject.firstName = nameHere[0];
	nameObject.lastName = nameHere[1];

	return nameObject;

}



//Problem 5 ============================================


function fiveTo(endNum) {
	var simpleArray = [];

	for (var i = 5; i < endNum; i++){
		//pushes numbers to the array
		simpleArray.push(i);
	}
	return simpleArray;
}


//Problem 6 =============================================

function upperCaseLastNames(arrayOfObjects){
	for (var i = 0; i < arrayOfObjects.length; i++){

		arrayOfObjects[i].lastName = arrayOfObjects[i].lastName.charAt(0).toUpperCase() + arrayOfObjects[i].lastName.slice(1);
		
	}
	return arrayOfObjects;
}




















