var pasta = {
	noodle: prompt("What kind of noodles would you like?"),

	noodlesBoiled: false,

	sauce: prompt("What kind of sauce would you like?"),

	
}

var meat = {
	meat: confirm("Meat?"),

	meatTemp: 30;
}

function cookNoodles() {
	var waterTemp;

	for (var i = 70; i <= 212; i++){
		waterTemp = waterTemp + i;
	}
	if (waterTemp == 212) {
		//add "pasta"
		pasta.noodlesBoiled = true;
	}
	return pasta.noodlesBoiled;
}

function brownMeat() {
	var panHeat;

	for (i = 70; i <= 330; i++){
		panHeat = panHeat + i
	}
	if (panHeat == 330) {
		//add meat
		for (j = 30; j <= 160; j++){
			meat.meatTemp = meat.meatTemp + j;
		}
	}
	return meat.meatTemp;
}

function flavorTown () {

	var plate = {
		//meat

		//pasta
	}
	console.log("Guy Fieri: 'Dude this pasta is so good'");

	return plate = goodEats

}

cookNoodles();

brownMeat();

flavorTown();