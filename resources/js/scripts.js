$(document).ready(function() {
   
    /* Sticky navigation */
    $('#section-features').waypoint(function(direction) {
       if (direction === 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
           offset: '70px;'
    });
    
    /* Scroll-on buttons */
    $('#hungry-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000)
    });
    
    $('#show-more-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000)
    });
    
});