
$(document).ready(function() {

   /* DEBUT ANIMATION SLIDER */
  $('.flexslider').flexslider({
    animation: "slide"
  });
   /* FIN ANIMATION SLIDER */

$('#trigger').on('click', function(){
   $(this).toggleClass('clicked');
});

$.stellar({
    // Set scrolling to be in either one or both directions
    horizontalScrolling: false,
    verticalScrolling: true,
    verticalOffset: -100,
});

});
