'use strict';

var mapElement = document.getElementById('map');

var mapOptions = {

	//zoom level

	zoom: 10,

	// This sets the center of the map at our location
     center: {
                lat:  29.426791,
                lng: -98.497888
            },
    mapTypeId: google.maps.MapTypeId.HYBRID
}

var map = new google.maps.Map(mapElement, mapOptions);

google.maps.event.addListener(mapElement, 'click', function(event) {
   placeMarker(event.latLng);
});

function placeMarker(location) {
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}

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


