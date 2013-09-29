$(function() {
	$('.box, .rslides > li >  div').css("height", $(window).height());
	$( window ).resize(function() {
		$('.box, .rslides > li > div').css("height", $(window).height());
		s.refresh();
	});

	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 500,            // Integer: Speed of the transition, in milliseconds
	  timeout: 4000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: true,             // Boolean: Show navigation, true or false
	  prevText: "<",   // String: Text for the "previous" button
	  nextText: ">",       // String: Text for the "next" button
	  navContainer: ".rslides",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	});


	var s = skrollr.init();
	s.refresh();





});