$(document).ready(function() {
   
    /*------ Sticky navigation ------*/
    $('#section-features').waypoint(function(direction) {
       if (direction === 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
    }, {
           offset: '70px;'
    });
    
    /*------ Scroll-on buttons ------*/
    $('#hungry-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000)
    });
    
    $('#show-more-button').click(function () {
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
    
});