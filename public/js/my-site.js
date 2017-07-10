"use strict";
//Adds dropdown function to upper menu bar
$('#dropdown-button').click(function(){
    $('#mobile-hidden').slideToggle(100);
});


$('#hidden1').click(function(){
    $('#mobile-hidden').slideToggle(100);
    $('#sidebar1').animate({
        'margin-left': '200px',
        'border-radius': '10px',
        width: '800px',
        height: '800px',
        'margin-top': '50px'
    }, 400).animate({
        'box-shadow': '3px 3px 3px rgba(0,0,0,0.5)'
    }, {
        duration: 250,
        complete: function(){
            $('.hidden-profile').animate({
                opacity: 1
            }, {
                duration: 500
            })
        }
    })
})

$('#hidden2').click(function(){
    $('#mobile-hidden').slideToggle(100);
    $('#sidebar1').animate({
        'margin-left': '-1000px',
        height: '0px',
        width: '0px'
    }, 400)
})