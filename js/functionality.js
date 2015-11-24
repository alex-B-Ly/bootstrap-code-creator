$(document).ready(function() {
  

  // SLIDE MENU
  function menuSlide(){  
    $('.menu').hide();

    $('#menu-slider').on('click', function() {
      event.preventDefault();
      $('.menu').slideToggle(400);
    });
  }

  // ROW AND COLS DIV CREATION
  function rowCreate(){
    var rowButton = $('#create-row-button');
    var rowFluidCheck = document.getElementById('row-fluid-check');
    var codeField = document.getElementById('code');
    var idAssign = document.getElementById('id-assign');
    var classAssign = document.getElementById('class-assign');

    rowButton.on('click', function() {
      if(rowFluidCheck.checked){
        if(idAssign.value && classAssign.value){
          codeField.textContent += '<div id="'+ idAssign.value +'" class="row-fluid '+ classAssign.value + '">\n\n';  
        }else if(idAssign.value){
          codeField.textContent += '<div id="'+ idAssign.value +'" class="row-fluid">\n\n';  
        }else if(classAssign.value){
          codeField.textContent += '<div class="row-fluid '+ classAssign.value +'">\n\n';
        }else{
          codeField.textContent += '<div class="row-fluid">\n\n';
        }
      }else if(rowFluidCheck.checked === false){
        if(idAssign.value && classAssign.value){
          codeField.textContent += '<div id="'+ idAssign.value +'" class="row '+ classAssign.value + '">\n\n'; 
        }else if(idAssign.value){
          codeField.textContent += '<div id="'+ idAssign.value +'" class="row">\n\n';  
        }else if(classAssign.value){
          codeField.textContent += '<div class="row '+ classAssign.value +'">\n\n';
        }else{
          codeField.textContent += '<div class="row">\n\n';
        }
      }

      idAssign.value = '';
    });
  }

  function colsCreate(){
    var colsButton = $('#create-cols-button');
    var codeField = document.getElementById('code');

    colsButton.on('click', function(){
      codeField.textContent += '<div class="col">';
    });
  }

  function divCloseCreate(){
    var closeButton = $('#close-div-button');
    var codeField = document.getElementById('code');

    closeButton.on('click', function(){
      codeField.textContent += '</div>\n\n';
    });
  }

  // CLEAR CODE
  function clearCode(){
    var code = $('#code');
    var clearButton = $('#clear-code');

    clearButton.on('click', function(e) {
      e.preventDefault();
      code.text('');
    });
  }

  // FUNCTIONS CALLED
  menuSlide();
  rowCreate();
  colsCreate();
  divCloseCreate();
  clearCode();
});
