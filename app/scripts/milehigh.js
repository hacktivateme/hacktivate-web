$(function() {
    $('.box, .rslides > li >  div').not('.register').css("height", $(window).height());
    $( window ).resize(function() {
        $('.box, .rslides > li > div').not('.register').css("height", $(window).height());
        s.refresh();
    });

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

    var s = skrollr.init();
    s.refresh();
});

Parse.initialize("unrBecgZTNcb5QjJFnolAqsg5i8BoToRlz2K4ZSv", "riitwpfPnYb4gwZNTxNK7QaO0LRHP9YXsA8sy3hl");
var Developer = Parse.Object.extend("Developer");
var Designer = Parse.Object.extend("Designer");

var submitForm = function()
{
    var isDeveloper = $("#developer_radio").is(':checked');

    var genericList = [
        "name",
        "email_address",
        "phone_number",
        "twitter_handle",
        "personal_website",
        "favourite_project",
        "what_do_you_do"
    ];

    var devSpecificList = [
        "dev_github",
        "dev_skills_and_tools",
        "dev_fav_hacker"
    ];

    var designerSpecificList = [
        "designer_portfolio",
        "designer_skills_and_tools",
        "designer_biggest_design_influence"
    ];


    var signee = isDeveloper ? new Developer() : new Designer();

    for(var i = 0;i < genericList.length;i++)
        signee.set(genericList[i], $("#" + genericList[i]).val());

    if(isDeveloper)
    {
        for(var i = 0;i < devSpecificList.length;i++)
            signee.set(devSpecificList[i], $("#" + devSpecificList[i]).val());
    }
    else
    {
        for(var i = 0;i < designerSpecificList.length;i++)
            signee.set(designerSpecificList[i], $("#" + designerSpecificList[i]).val());
    }

    signee.save(null, {failure: function(){
        $( "<h5>Thanks! We'll be in touch.</h5>" ).replaceAll( ".pure-button-primary" );
    }, success: function(){
        $( ".pure-button-primary" ).before('<h5>Check the form and try again</h5>');
    }});
}

$(function() {
    $('input:radio').change(function() {
        if(this.id === 'designer_radio') {
            $('.hacker').hide();
            $('.designer').fadeIn();
            $('.pure-button').show();
        } else {
            $('.designer').hide();
            $('.hacker').fadeIn();
            $('.pure-button').show();
        }
    });
});