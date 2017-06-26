"use strict";

(function (){

var conversion;

var mapElement = document.getElementById('map');

var mapOptions = {

	//zoom level

	zoom: 15,

	// This sets the center of the map at our location
     // center: {
     //            lat:  29.426791,
     //            lng: -98.497888
     //        },
    mapTypeId: google.maps.MapTypeId.HYBRID
}

var query = prompt("Please enter the address you'd like to search")

var map = new google.maps.Map(mapElement, mapOptions);



var favRestaurant = "8607 FM1976, Converse, TX 78109";

var home = "6403 Flatstone Pass, Converse, TX 78109";

// Init geocoder object
var geocoder = new google.maps.Geocoder();


//======================================================================
// Geocode our address
//======================================================================


geocoder.geocode({ "address": query }, function(results, status) {
   
   // Check for a successful result


    if (status == google.maps.GeocoderStatus.OK) {

       // Recenter the map over the address
    	map.setCenter(results[0].geometry.location);


      	conversion = results[0].geometry.location
    	console.log(conversion);


	    var marker = new google.maps.Marker({
		position: conversion,
		map: map
});
		var infowindow = new google.maps.InfoWindow({
   		content: "<div><object type= 'text/html' data = 'http://codeup.dev/calculator.html' width = '400px' height = '400px'></object></div>"
});
		infowindow.open(map, marker);



   } else {

       // Show an error message with the status if our request fails
       alert("Geocoding was not successful - STATUS: " + status);
   }
});

//adds location for marker
// var codeup = { lat: 29.426791, lng: -98.489602 };
// // Add the marker to our existing map
// var marker = new google.maps.Marker({
//     position: codeup,
//     map: map
// });
// var marker2 = new google.maps.Marker({
// 	position: favRestaurant,
// 	map: map
// })
var marker = new google.maps.Marker({
	position: conversion,
	map: map
})


})()