// (function(){

"use strict;"


// OBJECTS =====================================================


var newUser = {
	name: 		"",
	charRace: ""
}


var userStats = {
	hp: 250,
	mana: 50,
	gold: 0

};



// BEGIN NEW GAME =============================================

$("#intro").click(function(){
	$("#display1").text("Welcome, Traveller, to the Kingdom of Altaria! \n What is your name?");
	console.log("Success! Intro initiated!");
	$("#hp").text(userStats.hp);
	$("#mana").text(userStats.gold);
	$("#face1").show();

});
// USER PROMPTS ================================================
var response;

// $("#response").keyup(function(event){
//     if(event.keyCode == 13){
//         $("#enter").click();
//     }
// });

document.getElementById("response")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        document.getElementById("enter").click();
        document.getElementById("response").innerText = "";
    }
});


function getResponse(){
	response = document.getElementById("response");
	// console.log(response.value);
	return response = response.value;
}
function testResponse(){
	console.log(response);
}


//THE MAIN GAME=================================================



// CLEAR THE GAME !!NO SAVE ABILITY YET!!=======================
$("#clear").click(function(){
	confirm("Are you sure you want to quit?");
	$("#display1").text("Press the Start Button!");
	$("#hp, #mana, #gold").text("");
	$("#face1").hide();
	console.log("Cleared the Game!")

});

















// })();