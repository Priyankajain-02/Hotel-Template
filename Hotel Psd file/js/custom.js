$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 5,
      responsiveClass: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 1000,
      responsive: {
        0: {
          items:2,
   
        },
        600: {
          items:4,
 
        },
        1000: {
          items:7,
         
          loop: true,
        
        }
      }
    })
  })