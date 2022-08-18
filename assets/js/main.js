/*-----------------------------------------------------------------------------------

    Template Name: Practical Task
    Version: Bootstrap 5.0.2 
    Author: Himanshu Parekh

    ----------------------------------------------------------------------------------- */


/*-----------------------------------------------------------------------------------

     
    AOS
    owlCarousel
    ----------------------------------------------------------------------------------- */

// AOS
AOS.init({
  disable: function() {
    var maxWidth = 2000;
    return window.innerWidth < maxWidth;
  }
}); /* init */

// OwlCarousel
jQuery(function () {
    $('.testimonials-slider').owlCarousel({
        loop:true,
        nav:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
    })
});