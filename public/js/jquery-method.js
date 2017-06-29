'use strict';

$('.invisible').hover(function(){
	$(this).toggleClass('invisible');
});
//
$('dd').click(function(){
	$(this).toggleClass('visible');
})
//
$('#reveal-all').click(function(){
	$('dd').toggleClass('visible');
})
//-------------------------------------------------------------------------------
//														 ______|~
//								Traversing		   ______\_|___|_
//                                                \ o  o  o  o  |
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~--------------~~~~~~~~~~~~~~~~
console.log('hello');

$('.close').click(function(){
	$('.news').first().html('OKAY FINE WHATEVER DUDE').css('font-size', '2em');
	$('.news').slideToggle(20000);
})


$('#click-here').click(function(){
	$('li').slideToggle(200);
});

$('h3').click(function(){
	$(this).next().children().css('font-weight', 'bold');
});

$('li').click(function(){
	$(this).parent().children().first().css('background', 'blue');
})