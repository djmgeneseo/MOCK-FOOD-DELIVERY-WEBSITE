$(document).ready(function() {
   
    /*------ Sticky navigation ------*/
    $('.js--sticky-nav-waypoint').waypoint(function(direction) {
       if (direction === 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
           offset: '70px;'
    });
    
    /*------ Scroll-on buttons ------*/
    $('.js--hungry-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000)
    });
    
    $('.js--show-more-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000)
    });
    
    /*------ Navigation Scroll ------*/
    
    
    // Add smooth scrolling to all links
    $("a[href^='#']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
    
    /*------ Animations on Scroll ------*/
    $('.js--animation-waypoint-features').waypoint(function(direction){
        $('.js--animation-waypoint-features').addClass('animated fadeIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-phone').waypoint(function(direction){
        $('.js--animation-waypoint-phone').addClass('animated slideInUp');
    }, {
        offset: '50%'
    });
    
    $('.js--animation-waypoint-quotes-1').waypoint(function(direction){
        $('.js--animation-waypoint-quotes-1').addClass('animated swing');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-quotes-2').waypoint(function(direction){
        $('.js--animation-waypoint-quotes-2').addClass('animated swing');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-quotes-3').waypoint(function(direction){
        $('.js--animation-waypoint-quotes-3').addClass('animated swing');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-plan-1').waypoint(function(direction){
        $('.js--animation-waypoint-plan-1').addClass('animated bounceIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-plan-2').waypoint(function(direction){
        $('.js--animation-waypoint-plan-2').addClass('animated bounceIn');
    }, {
        offset: '70%'
    });
    
    $('.js--animation-waypoint-form').waypoint(function(direction){
        $('.js--animation-waypoint-form').addClass('animated bounceInRight');
    }, {
        offset: '70%'
    });
   
    /*------ Mobile Navigation ------*/
    $('.js--nav-icon').click(function() {
       var nav = $('.js--main-nav');
        /* Open and close sticky and main */
        nav.slideToggle(200);
    });
    
    /* js--jumbo-text */
    
});