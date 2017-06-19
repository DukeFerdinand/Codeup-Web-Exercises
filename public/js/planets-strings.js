(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetString2;
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split("|");


    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    // planetsString = planetsArray.join("<br>");
    // console.log(planetsString);

    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.
    console.log(planetsArray);
        for( var i = 0; i<16; i += 2){
            planetsArray.splice(i, 0, "<li>");
        }
        console.log(planetsArray)
        for (var j = 2; j<=24; j+=3){
            planetsArray.splice(j, 0, "</li>");
        }
            planetsArray.unshift("<ul>");
            planetsArray.push("</ul");
            planetString2 = planetsArray.join("");

    console.log(planetString2);
    // document.write(planetString2);
    document.getElementsByTagName("div")[0].innerHTML = planetString2;

})();
