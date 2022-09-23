var $HideElement = $(".hide");
var $Dimmer = $("#dimmer");
var $SocialAccAlt = $("#social-acc-alt");
var $Contacts = $(".contacts");
var $Header = $(".header_nav");
var $ContactProject = $("#contacts-projects");
var $Change = $('.change');
var $ConProjHead = $("#contacts-projects nav h1");
var $main = $('main');
var $footer = $('#contacts-projects #footer');
var $background = $("#background")

$(function () {
    // TO IDENTIFY IF THE WEBSITE IS OPENED IN A MOBILE OR A PC
    var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    $(window).on('beforeunload', function(){
        $Header.css({width: "100%"});
        });

    if(isMobile){
        $Contacts.css({'flex-direction': "column", "width": "auto"});
        $Header.css({position: "absolute"});
    }
});

$(document).ready(function () {
    $Change.click(function(){
        $ConProjHead.html($(this).attr("data-h1"));
        $($(this).attr('href')).addClass('active').siblings().removeClass('active');
        $("." + $(this).attr('data-key')).removeClass('not-active').siblings('.show-hide').addClass('not-active');
        window.location.hash = $(this).attr('data-hash');
    });
});

window.onhashchange = function() { // To detect if the url has been changed
    if(window.location.hash == "#home" || window.location.hash == "#aboutme" || window.location.hash == ""){
        $Dimmer.hide();
        $HideElement.hide();
        $main.show();
        $Contacts.show();
    }
    else if(window.location.hash == "#socialmedias"){
        $SocialAccAlt.slideDown(100);
        $Dimmer.show();
    }
    else {
        $ContactProject.show();
        $main.hide();
        $Contacts.hide();
    }
    if(window.location.hash == "#undefined"){
        window.location.hash = "#home";
    }
};

window.onload = function() { // To run a function after reloading the page
    if(window.location.hash == "#socialmedias"){
        $SocialAccAlt.slideDown(100);
        $Dimmer.show();
    }
    else if (window.location.hash == "#project" || window.location.hash == "#message"|| window.location.hash == "#location"){
        window.location.hash = "#home";
    }
};
