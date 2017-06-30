"use strict";

$('button').click(function(){
    $('#sidebar1').animate({
        width: '200px',
        height: '200px'
    }, 1000).animate({
        'margin-left': '200px',
        'border-radius': '10px'
    }, {
        duration: 1000,
        complete: function(){
            $('.hidden-profile').animate({
                opacity: 1
            }, 1500)
        }
    })
})