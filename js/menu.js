$(document).ready(function(){
    $(".hamburger-menu").click(function(){
    	$(".nav-links-mobile").toggleClass("mobile-nav-closed");
    });

  //   $(".menu-overlay a").click(function( event ){
  //       $(".menu-overlay").toggle();
  //       console.log(this.hash);
  //       $("html, body").animate({
		// 	scrollTop: $(this.hash).offset().top
		// }, 1000);
  //       $(".menu-toggle").removeClass("open");
  //       event.preventDefault();
  //       $(".our-work-toggle").removeClass("open");
  //       event.preventDefault();
  //       $(".contact-us-toggle").removeClass("open");
  //       event.preventDefault();
  //   });

});
