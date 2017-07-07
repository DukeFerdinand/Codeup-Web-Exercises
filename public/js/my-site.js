"use strict";
//Adds dropdown function to upper menu bar
$('#dropdown-button').click(function(){
    $('#mobile-hidden').fadeToggle(200);
});


$('#hidden1').click(function(){
    $('#sidebar1').animate({
        width: '800px',
        height: '800px',
        'margin-top': '50px'
    }, 800).animate({
        'margin-left': '200px',
        'border-radius': '10px',
        'box-shadow': '3px 3px 3px rgba(0,0,0,0.5)'
    }, {
        duration: 250,
        complete: function(){
            $('.hidden-profile').animate({
                opacity: 1
            }, {
                duration: 1000
            })
        }
    })
})