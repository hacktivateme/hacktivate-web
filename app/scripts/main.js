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

    contactRequest.save(null, {success: function(){
        $("<h5 class=\"confirmation\">Cheers for the message, we'll be in touch!</h5>").replaceAll('.button-contact-submit');
    }, error: function(){
        $("h5.error h5.confirmation").remove();
        $('.button-contact-submit').after("<h5 class=\"error\">Looks like we struggled to send that. If you keep having problems, <a href=\"mailto:hi@hacktivate.me\">use old school email.</a></h5>");
    }});
}
