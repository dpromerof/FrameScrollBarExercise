  $( init );

  function init() {
    $(".fulfilled").hide();
    $("#frame1_1").data('isOk', false);
    $("#frame1_2").data('isOk', false);
    $("#frame1_3").data('isOk', false);
    $("#frame2_1").data('isOk', false);
    $("#frame2_2").data('isOk', false);
    $("#frame2_3").data('isOk', false);
    $("#frame3_1").data('isOk', false);
    $("#frame3_2").data('isOk', false);
    $("#frame3_3").data('isOk', false);
  }

  $(document).ready(function(){
    insertaSaltosLinea(".linea1");
    $(".linea1").append("M");
    insertaSaltosLinea(".linea1");

    insertaEspacios(".linea2");
    $(".linea2").append("O");
    insertaEspacios(".linea2");

    insertaSaltosLinea(".linea3");
    insertaEspacios(".linea3");
    $(".linea3").append("M");
    insertaEspacios(".linea3");
    insertaSaltosLinea(".linea3");

    defineSiColoreaFramesLinea1("#frame1_1");
    defineSiColoreaFramesLinea1("#frame1_2");
    defineSiColoreaFramesLinea1("#frame1_3");

    defineSiColoreaFramesLinea2("#frame2_1");
    defineSiColoreaFramesLinea2("#frame2_2");
    defineSiColoreaFramesLinea2("#frame2_3");

    defineSiColoreaFramesLinea3("#frame3_1");
    defineSiColoreaFramesLinea3("#frame3_2");
    defineSiColoreaFramesLinea3("#frame3_3");
  });

  function insertaSaltosLinea(frame) {
    for ( var i=0; i<10; i++ ) {
      $(frame).append("<br />");
    }
  }

  function insertaEspacios(frame) {
    for ( var i=0; i<50; i++ ) {
      $(frame).append("&nbsp;");
    }
  }

  function defineSiColoreaFramesLinea1(frame) {
    $(frame).scroll(function() {
      //console.log($(frame).scrollTop());
      if (   ($(frame).scrollTop() > 830 )
          && ($(frame).scrollTop() < 930))
          {
            $(frame).css("background-color", "#00ffff");
            $(frame).data('isOk', true);
            validaSiFulfilled();
          } else {
            $(frame).css("background-color","white");
            $(frame).data('isOk', false);
            $(".fulfilled").hide();
          }
      }
    );
  }

  function defineSiColoreaFramesLinea2(frame) {
    $(frame).scroll(function() {
      //console.log($(frame).scrollLeft());
      if (   ($(frame).scrollLeft() > 760 )
          && ($(frame).scrollLeft() < 1000))
          {
            $(frame).css("background-color", "#ff00ff");
            $(frame).data('isOk', true);
            validaSiFulfilled();
          } else {
            $(frame).css("background-color","white");
            $(frame).data('isOk', false);
            $(".fulfilled").hide();
          }
      }
    );
  }

  function defineSiColoreaFramesLinea3(frame) {
    $(frame).scroll(function() {
      //console.log($(frame).scrollTop());
      //console.log($(frame).scrollLeft());
      if (   ($(frame).scrollTop() > 830 )
          && ($(frame).scrollTop() < 930 )
          && ($(frame).scrollLeft() > 760 )
          && ($(frame).scrollLeft() < 1000))
          {
            $(frame).css("background-color", "#ffff00");
            $(frame).data('isOk', true);
            validaSiFulfilled();
          } else {
            $(frame).css("background-color","white");
            $(frame).data('isOk', false);
            $(".fulfilled").hide();
          }
      }
    );
  }

  function validaSiFulfilled() {
    if (    ($("#frame1_1").data('isOk'))
         && ($("#frame1_2").data('isOk'))
         && ($("#frame1_3").data('isOk'))
         && ($("#frame2_1").data('isOk'))
         && ($("#frame2_2").data('isOk'))
         && ($("#frame2_3").data('isOk'))
         && ($("#frame3_1").data('isOk'))
         && ($("#frame3_2").data('isOk'))
         && ($("#frame3_3").data('isOk'))
       ) {
      $(".fulfilled").show();
    }
  }
