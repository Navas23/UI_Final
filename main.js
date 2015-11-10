$( document ).ready(function() {

  var uiMenu = $('.ui-context-menu.example');
  var zIndex = 1;

  $('.ui-view').on('contextmenu', function(e){

    zIndex++;
    console.log(e.pageX+ ' , ' + e.pageY);
    e.preventDefault();
    var width   = e.pageX;
    var heigth  = e.pageY;
    console.log(uiMenu);
    uiMenu.clone().css({
      "zIndex" : zIndex,
      "position": "absolute",
      "left": e.pageX,
      "top": e.pageY
    }).insertAfter($('.ui-view'));

  });

  $('.ui-context-menu').on('click', function(e){
    console.log( $(this) );
    $( this ).style.animation
  });


  $(document).keypress( function(e){

    if(e.which === 100){
        $('.ui-view').toggleClass('dark');
    }

  });

  $('.ui-checkbox').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      if(object.hasClass('active')){
        object.removeClass('active');
      }else{
        object.addClass('active');
      }
    }

  });

  $('.ui-radio-button').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      if(object.hasClass('active')){
        object.removeClass('active');
      }else{
        object.addClass('active');
      }
    }

  });

});
