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