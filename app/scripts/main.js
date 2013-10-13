$(function() {

	$(".rslides").responsiveSlides({
	  auto: true,             // Boolean: Animate automatically, true or false
	  speed: 800,            // Integer: Speed of the transition, in milliseconds
	  timeout: 10000,          // Integer: Time between slide transitions, in milliseconds
	  pager: false,           // Boolean: Show pager, true or false
	  nav: true,             // Boolean: Show navigation, true or false
	  prevText: "<",   // String: Text for the "previous" button
	  nextText: ">",       // String: Text for the "next" button
	  navContainer: ".rslides",       // Selector: Where controls should be appended to, default is after the 'ul'
	  manualControls: "",     // Selector: Declare custom pager navigation
	});

});

Parse.initialize("unrBecgZTNcb5QjJFnolAqsg5i8BoToRlz2K4ZSv", "riitwpfPnYb4gwZNTxNK7QaO0LRHP9YXsA8sy3hl");
var ContactRequest = Parse.Object.extend("ContactRequest");

var submitContact = function()
{
    var contactRequest = new ContactRequest();

    var genericList = [
        "name",
        "email",
        "message"
    ];

    for(var i = 0;i < genericList.length;i++)
        contactRequest.set(genericList[i], $("#" + genericList[i]).val());

    contactRequest.save(null, {success: function(){}, error: function(){}});
}
