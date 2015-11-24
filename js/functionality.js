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
    var xsInp = document.getElementById('resp-input-xs');
    var smInp = document.getElementById('resp-input-sm');
    var mdInp = document.getElementById('resp-input-md');
    var lgInp = document.getElementById('resp-input-lg');
    var allInp = document.getElementById('resp-input-all');
    var classAssign = document.getElementById('class-assign');

    colsButton.on('click', function(){
      codeField.textContent += '<div class="';
      if(allInp.value){
        codeField.textContent += 'col-xs-'+allInp.value+' col-sm-'+allInp.value+' col-md-'+allInp.value+' col-lg-'+allInp.value;
      }
      if(xsInp.value){
        if(xsInp.value.toLowerCase() ==='h'){
          codeField.textContent += 'hidden-xs';  
        }else{
          codeField.textContent += 'col-xs-'+xsInp.value;
        }
      }
      if(smInp.value){
        if(smInp.value.toLowerCase() ==='h'){
          codeField.textContent += ' hidden-sm';  
        }else{
          codeField.textContent += ' col-sm-'+smInp.value;
        }
      }
      if(mdInp.value){
        if(mdInp.value.toLowerCase() === 'h'){
          codeField.textContent += ' hidden-md';  
        }else{
          codeField.textContent += ' col-md-'+mdInp.value;
        }
      }
      if(lgInp.value){
        if(lgInp.value.toLowerCase() === 'h'){
          codeField.textContent += ' hidden-lg';  
        }else{
          codeField.textContent += ' col-lg-'+lgInp.value;
        }
      }
      // TODO Add additional classes here, including ALL and class input
      if(classAssign.value){
        codeField.textContent += ' ' + classAssign.value;
      }
      codeField.textContent += '">';
    });
  }

  function divCloseCreate(){
    var closeButton = $('#close-div-button');
    var codeField = document.getElementById('code');

    closeButton.on('click', function(){
      codeField.textContent += '</div>\n\n';
    });
  }

  // COLUMN INPUT FIXER

  function colFix(){
    var xsInp = document.getElementById('resp-input-xs');
    var smInp = document.getElementById('resp-input-sm');
    var mdInp = document.getElementById('resp-input-md');
    var lgInp = document.getElementById('resp-input-lg');
    var allInp = document.getElementById('resp-input-all');
    var individualInps =[xsInp, smInp, mdInp, lgInp];

    function allInputPoof(){
      if(xsInp.value || smInp.value || mdInp.value || lgInp.value){
        allInp.value = '';
      }
    }

    function individualPoof(){
      if(allInp.value){
        for(var i=0; i<individualInps.length; i++){
          individualInps[i].value = '';
        }
      }
    }

    allInp.addEventListener('keyup', individualPoof);

    for(var j=0; j<individualInps.length; j++){
      individualInps[j].addEventListener('keyup', allInputPoof);
    }
  }

  // CLEAR COLUMNS
  function colClear(){
    var clearCols = document.getElementById('clear-cols');
    var xsInp = document.getElementById('resp-input-xs');
    var smInp = document.getElementById('resp-input-sm');
    var mdInp = document.getElementById('resp-input-md');
    var lgInp = document.getElementById('resp-input-lg');
    var allInp = document.getElementById('resp-input-all');
    var allCols = [xsInp, smInp, mdInp, lgInp, allInp];

    function clear(){
      for(var i = 0; i<allCols.length; i++){
        allCols[i].value = '';
      }
    }

    clearCols.addEventListener('click', clear);
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
  colFix();
  colClear();

});