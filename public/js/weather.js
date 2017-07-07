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
	//Using jQuery to sift through the API and find and display goodies relevent to the display
		console.log(data)
		var today;
		var date = new Date();
		

	for (var i = 0; i < data.list.length; i++){

		console.log(data.list[i].temp.max);

		$('#city').html(data.city.name);

		for (var day = 0; day <= 7; day ++){

			today = date.getDay();
			today = today + i;
			today = (today % 7);
			console.log(today);
		switch (today) {
			case 1:
				today = "Monday";
				break;
			case 2:
				today = "Tuesday";
				break;
			case 3:
				today = "Wednesday";
				break;
			case 4:
				today = "Thursday";
				break;
			case 5:
				today = "Friday";
				break;
			case 6:
				today = "Saturday";
				break;
			case 0:
				today = "Sunday";
				break;
			default:
				today = 'Error';
				break;
			}
		}
		$('#date' + (i + 1)).append(today);
		$('#temp' + (i + 1)).append("<h3>" + data.list[i].temp.max + '/' + data.list[i].temp.min + '℉ </h3>');
		$('#icon' +(i + 1)).append("<img src='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon +".png'><br>");
		$('#cloud' + (i + 1)).append("<strong>" + data.list[i].weather[0].main.toLowerCase() + ": </strong>" + data.list[i].weather[0].description + '<br>');
		$('#humidity' + (i + 1)).append("<strong>humidity: </strong>" + data.list[i].humidity + '<br>');
		$('#wind' +(i + 1)).append("<strong>wind: </strong>" + data.list[i].speed + ' mph<br>');
		$('#pressure' + (i + 1)).append("<strong>pressure: </strong>" + data.list[i].pressure + '<br>');

		}


})