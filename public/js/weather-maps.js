'use strict';

// var mapElement = document.getElementById('map');

// var mapOptions = {

// 	//zoom level

// 	zoom: 10,

// 	// This sets the center of the map at our location
//      center: {
//                 lat:  29.426791,
//                 lng: -98.497888
//             },
//     mapTypeId: google.maps.MapTypeId.HYBRID
// }

// var map = new google.maps.Map(mapElement, mapOptions);


// //Attach click event handler to the map.
// 	var marker;
// 	var markerCount = 0;
// google.maps.event.addListener(map, 'click', function (e) {
//     //Determine the location where the user has clicked.
//     var location = e.latLng;
//     //Create a marker and placed it on the map.
//     if (markerCount >= 1) {
//     	marker.setMap(null);
    	
//     }

//     marker = new google.maps.Marker({
//         position: location,
//         map: map
//     });
//     markerCount ++;
//     console.log(markerCount);
//     //Attach click event handler to the marker.
//     google.maps.event.addListener(marker, "click", function (e) {
//         var infoWindow = new google.maps.InfoWindow({
//             content: 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng()
//         });
//         infoWindow.open(map, marker);
//     });
// });





// google.maps.event.addListener(mapElement, 'click', function(event) {
//    placeMarker(event.latLng);
// });

// function placeMarker(location) {
//     var marker = new google.maps.Marker({
//         position: location, 
//         map: map
//     });
// }

// mapElement.addEventListener('click', function(e){
// 	placeMarker(e.latLng, mapElement);
// })

// function placeMarker(position, map){
// 	marker.setMap(null);
// 	var marker = new google.maps.Marker({
// 			position: position,
// 			map: map
// 	    });
	
// }
// // mapElement.innerHTML = '<h1>Hello</h1>'


