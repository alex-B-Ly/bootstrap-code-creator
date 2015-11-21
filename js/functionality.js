$(document).ready(function() {
  
  $('.menu').hide();


  $('#menu-slider').on('click', function() {
    event.preventDefault();
    $('.menu').slideToggle(400);
  });

});







