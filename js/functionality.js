$(document).ready(function() {
  
  $('.menu').hide();


  $('#menu-slider').on('click', function() {
    event.preventDefault();
    $('.menu').slideToggle(400);
  });

});

// Element Selector

var mainSelected;

function selector(e){
  mainSelected = e.target.id;
  $('#mod-selection').text(mainSelected);
}

document.addEventListener('click', selector);