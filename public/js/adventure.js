"use strict;"

var userStats = {
	hp: 250,
	mana: 50,
	gold: 0

};


// BEGIN NEW GAME =============================================


$("#intro").click(function(){
	$("#display1").text("");
	$("#display1").coolType("Welcome, Traveller, to the Kingdom of Altaria!\
		\
		What is your name?");
	console.log("Success! Intro initiated!");
	$("#hp").text(userStats.hp);
	$("#mana").text(userStats.gold);
	$("#face1").show();

});
// USER PROMPTS ================================================





// CLEAR THE GAME !!NO SAVE YET!!--------------------
$("#clear").click(function(){
	confirm("Are you sure you want to quit?");
	$("#display1").text("Press the Start Button!");
	$("#hp, #mana, #gold").text("");
	$("#face1").hide();

});