"use strict";

$('#profile').click(function(){
    $('#sidebar1').animate({
        width: '200px',
        height: '200px'
    }, 1000).animate({
        'margin-left': '200px',
        'border-radius': '10px',
        'box-shadow': '3px 3px 3px rgba(0,0,0,0.5)'
    }, {
        duration: 750,
        complete: function(){
            $('.hidden-profile').animate({
                opacity: 1
            }, {
                duration: 1000
            })
        }
    })
})