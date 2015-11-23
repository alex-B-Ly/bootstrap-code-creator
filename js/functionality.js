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
  function rowCreate(){
    var rowButton = $('#create-row-button');
    var rowFluidCheck = document.getElementById('row-fluid-check');
    var codeField = document.getElementById('code');

    rowButton.on('click', function() {
      if(rowFluidCheck.checked){
        codeField.textContent += '<div class="row-fluid"></div>\n';
      }else{
        codeField.textContent += '<div class="row"></div>\n';
      }
    });
  }

  function divCreate(){
    var divButton = $('#create-div-button');
    var codeField = document.getElementById('code');

    divButton.on('click', function(){
      codeField.textContent += '<div class="col"></div>\n\n'
    });
  }

  // FUNCTIONS CALLED
  menuSlide();
  rowCreate();
  divCreate();
});
