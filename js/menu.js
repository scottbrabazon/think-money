//Open and close Mobile Navigation
$(document).ready(function(){
    $(".hamburger-button").click(function(){
    	$(".nav-links-mobile").toggleClass("mobile-nav-closed");
    });
});

//Smooth Scroll to form
$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
});