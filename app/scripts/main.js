$(function() {
	$('.box').css("min-height", $(window).height());

	$( window ).resize(function() {
	$('.box').css("min-height", $(window).height());
	s.refresh();
	
	});


	var s = skrollr.init();
	s.refresh();

});