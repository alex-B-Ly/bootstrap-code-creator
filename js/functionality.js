$(document).ready(function() {
  

  // slide menu
  function menuSlide(){  
    $('.menu').hide();

    $('#menu-slider').on('click', function() {
      event.preventDefault();
      $('.menu').slideToggle(400);
    });
  }

  // Pre test

  // FUNCTIONS CALLED
  menuSlide();

});
