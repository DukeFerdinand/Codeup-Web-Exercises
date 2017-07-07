"use strict";
//Adds dropdown function to upper menu bar
$('#dropdown-button').click(function(){
    $('#mobile-hidden').fadeToggle(200);
});


$('button').click(function(){
    $('#sidebar1').animate({
        width: '400px',
        height: '400px',
        'margin-top': '50px'
    }, 1000).animate({
        'margin-left': '200px',
        'border-radius': '10px',
        'box-shadow': '3px 3px 3px rgba(0,0,0,0.5)'
    }, {
        duration: 500,
        complete: function(){
            $('.hidden-profile').animate({
                opacity: 1
            }, {
                duration: 1000
            })
        }
    })
})