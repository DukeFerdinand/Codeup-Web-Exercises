(function() {
    "use strict";

    // create a circle object
    var circle = {
        area: '',
        radius: 3,
        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
            this.area = Math.PI * Math.pow(this.radius, 2);
            return this.area; // TODO: return the proper value
        },
        
        logInfo: function (doRounding) {
            // TODO: complete this method.
            if (doRounding) {
                
                console.log("Rounded area of a circle with radius: " + this.radius + " is: " + Math.round(this.area));
            } else {
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.area);
        }
        }
    };

    // log info about the circle
    circle.getArea();
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.
    circle.radius = 5
    circle.getArea();
    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
