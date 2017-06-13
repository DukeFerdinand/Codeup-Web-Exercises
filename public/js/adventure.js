var userStats = {
	hp: 250,
	mana: 50,
	gold: 0

};


// BEGIN THE GAME -----------------------------------
$("#intro").click(function(){
	$("#display1").text("You win the game!");
	$("#hp").text(userStats.hp);
	$("#mana").text(userStats.gold);
	$("#face1").show();

});;

// USER PROMPT --------------------------------------






// CLEAR THE GAME !!NO SAVE YET!!--------------------
$("#clear").click(function(){
	confirm("Are you sure you want to quit?");
	$("#display1").text("Press the Start Button!");
	$("#hp, #mana, #gold").text("");
	$("#face1").hide();

});