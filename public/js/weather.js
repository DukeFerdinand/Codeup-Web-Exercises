"use strict";

// console.log('Hello World!')
$.ajax("http://api.openweathermap.org/data/2.5/forecast/daily", {

    data: {
        APPID: "1671273d8fb3358671b09111cf13ae9a",
        q:     "San Antonio, TX",
        cnt:   "7",
        units: "imperial"
    }

}).done(function(data){
	console.log(data)
// 	console.log(data.city.name + ", " + data.city.country);
// 	console.log(data.list[0].clouds);
// 	$('.clouds').html("<strong>clouds: </strong>" + data.list[0].cloud)
	for (var i = 0; i < data.list.length; i++){
		console.log(data.list[i].temp.max);
		$('#temp' + (i + 1)).append("<h3>" + data.list[i].temp.max + '/' + data.list[i].temp.min + '℉ </h3>');
		$('#icon' +(i + 1)).append("<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +".png'><br>");
		$('#cloud' + (i + 1)).append("<strong>" + data.list[i].weather[0].main.toLowerCase() + ": </strong>" + data.list[i].weather[0].description + '<br>');
		$('#humidity' + (i + 1)).append("<strong>humidity: </strong>" + data.list[i].humidity + '<br>');
		$('#wind' +(i + 1)).append("<strong>wind: </strong>" + data.list[i].speed + ' mph<br>');
		$('#pressure' + (i + 1)).append("<strong>pressure: </strong>" + data.list[i].pressure + '<br>');

		}


})