
  $(document).ready(function(){
    // ROW AND COLUMN
    $("#row").click(function() {
            $("#aqui").addClass('row');
            $("#aqui").removeClass('column');
            $("#aqui").removeClass('row-reverse');
            $("#aqui").removeClass('column-reverse');
    });

    $("#column").click(function() {
            $("#aqui").addClass('column');
            $("#aqui").removeClass('row');
            $("#aqui").removeClass('row-reverse');
            $("#aqui").removeClass('column-reverse');
    });

    $("#column-reverse").click(function() {
            $("#aqui").addClass('column-reverse');
            $("#aqui").removeClass('row');
            $("#aqui").removeClass('row-reverse');
            $("#aqui").removeClass('column');
    });

    $("#row-reverse").click(function() {
            $("#aqui").addClass('row-reverse');
            $("#aqui").removeClass('column');
            $("#aqui").removeClass('column-reverse');
            $("#aqui").removeClass('row');
    });
    // ROW AND COLUMN

    // WRAP-NOWRAP
    $("#wrap").click(function() {
            $("#aqui").addClass('wrap');
            $("#aqui").removeClass('nowrap');
            $("#aqui").removeClass('wrapreverse');
    });

    $("#nowrap").click(function() {
            $("#aqui").addClass('nowrap');
            $("#aqui").removeClass('wrap');
            $("#aqui").removeClass('wrapreverse');
    });

    $("#wrapreverse").click(function() {
            $("#aqui").addClass('wrapreverse');
            $("#aqui").removeClass('wrap');
            $("#aqui").removeClass('nowrap');
    });

    // WRAP-NOWRAP

  // position
  $("#tl").click(function() {
          $("#aqui").addClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');


          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');


          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');


          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');


          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#tc").click(function() {
          $("#aqui").addClass('top-center');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-right');
          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');
          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });


  $("#tr").click(function() {
          $("#aqui").addClass('top-right');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');
          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#cl").click(function() {
          $("#aqui").addClass('center-left');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#cc").click(function() {
          $("#aqui").addClass('center-center');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#cr").click(function() {
          $("#aqui").addClass('center-right');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#bl").click(function() {
          $("#aqui").addClass('bottom-left');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#bc").click(function() {
          $("#aqui").addClass('bottom-center');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#br").click(function() {
          $("#aqui").addClass('bottom-right');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sb").click(function() {
          $("#aqui").addClass('space-between');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sbt").click(function() {
          $("#aqui").addClass('space-between-top');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sbc").click(function() {
          $("#aqui").addClass('space-between-center');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-top');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });


  $("#sbb").click(function() {
          $("#aqui").addClass('space-between-bottom');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-baseline');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sbbb").click(function() {
          $("#aqui").addClass('space-between-baseline');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-stretch');
          $("#aqui").removeClass('space-between-bottom');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sbs").click(function() {
          $("#aqui").addClass('space-between-stretch');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });
  $("#sa").click(function() {
          $("#aqui").addClass('space-around');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');

  });

  $("#sat").click(function() {
          $("#aqui").addClass('space-around-top');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');
  });

  $("#sac").click(function() {
          $("#aqui").addClass('space-around-center');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-bottom');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');
  });

  $("#sab").click(function() {
          $("#aqui").addClass('space-around-bottom');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-baseline');
  });

  $("#sabb").click(function() {
          $("#aqui").addClass('space-around-baseline');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-stretch');
          $("#aqui").removeClass('space-around-bottom');
  });
          $("#sas").click(function() {
          $("#aqui").addClass('space-around-stretch');
          $("#aqui").removeClass('top-left');
          $("#aqui").removeClass('top-center');
          $("#aqui").removeClass('top-right');

          $("#aqui").removeClass('center-left');
          $("#aqui").removeClass('center-center');
          $("#aqui").removeClass('center-right');

          $("#aqui").removeClass('bottom-left');
          $("#aqui").removeClass('bottom-center');
          $("#aqui").removeClass('bottom-right');

          $("#aqui").removeClass('space-between-top');
          $("#aqui").removeClass('space-between-center');
          $("#aqui").removeClass('space-between');
          $("#aqui").removeClass('space-between-baseline');
          $("#aqui").removeClass('space-between-bottom');
          $("#aqui").removeClass('space-between-stretch');

          $("#aqui").removeClass('space-around');
          $("#aqui").removeClass('space-around-top');
          $("#aqui").removeClass('space-around-center');
          $("#aqui").removeClass('space-around-baseline');
          $("#aqui").removeClass('space-around-bottom');
  });


































  //position
















































    // basis
    $("#basis").click(function() {
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis1").click(function() {
            $(".itemp").addClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });


    $("#basis2").click(function() {
            $(".itemp").addClass('basis2');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis3").click(function() {
            $(".itemp").addClass('basis3');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');

    });

    $("#basis4").click(function() {
            $(".itemp").addClass('basis4');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis5").click(function() {
            $(".itemp").addClass('basis5');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');

    });

    $("#basis7").click(function() {
            $(".itemp").addClass('basis7');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis8").click(function() {
            $(".itemp").addClass('basis8');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis9").click(function() {
            $(".itemp").addClass('basis9');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis10").click(function() {
            $(".itemp").addClass('basis10');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis12');
    });

    $("#basis11").click(function() {
            $(".itemp").addClass('basis11');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis5');
            $(".itemp").removeClass('basis12');
    });

    $("#basis12").click(function() {
            $(".itemp").addClass('basis12');
            $(".itemp").removeClass('basis1');
            $(".itemp").removeClass('basis2');
            $(".itemp").removeClass('basis3');
            $(".itemp").removeClass('basis4');
            $(".itemp").removeClass('basis6');
            $(".itemp").removeClass('basis7');
            $(".itemp").removeClass('basis8');
            $(".itemp").removeClass('basis9');
            $(".itemp").removeClass('basis10');
            $(".itemp").removeClass('basis11');
            $(".itemp").removeClass('basis5');
    });
    // basis
  // flex
  $("#wflex").click(function() {
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex").click(function() {
          $(".itemp").addClass('flex');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex1").click(function() {
          $(".itemp").addClass('flex1');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex2").click(function() {
          $(".itemp").addClass('flex2');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex3").click(function() {
          $(".itemp").addClass('flex3');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex4").click(function() {
          $(".itemp").addClass('flex4');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex5").click(function() {
          $(".itemp").addClass('flex5');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex6").click(function() {
          $(".itemp").addClass('flex6');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex7").click(function() {
          $(".itemp").addClass('flex7');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex8").click(function() {
          $(".itemp").addClass('flex8');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex9").click(function() {
          $(".itemp").addClass('flex9');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex10").click(function() {
          $(".itemp").addClass('flex10');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex12');
  });
  $("#flex11").click(function() {
          $(".itemp").addClass('flex11');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex1');
          $(".itemp").removeClass('flex12');
  });
  $("#flex12").click(function() {
          $(".itemp").addClass('flex12');
          $(".itemp").removeClass('flex');
          $(".itemp").removeClass('flex2');
          $(".itemp").removeClass('flex3');
          $(".itemp").removeClass('flex4');
          $(".itemp").removeClass('flex5');
          $(".itemp").removeClass('flex6');
          $(".itemp").removeClass('flex7');
          $(".itemp").removeClass('flex8');
          $(".itemp").removeClass('flex9');
          $(".itemp").removeClass('flex10');
          $(".itemp").removeClass('flex11');
          $(".itemp").removeClass('flex1');
  });
  //flex //
  $("#oflex").click(function() {
          $("#item1").addClass('flex');
  });
  $("#woflex").click(function() {
          $("#item1").removeClass('flex');
  });

  $("#ob").click(function() {
          $("#item1").addClass('basis1');
          $("#item1").removeClass('basis2');
          $("#item1").removeClass('basis3');
          $("#item1").removeClass('basis4');
          $("#item1").removeClass('basis5');
          $("#item1").removeClass('basis6');
  });

  $("#ob2").click(function() {
          $("#item1").addClass('basis2');
          $("#item1").removeClass('basis1');
          $("#item1").removeClass('basis3');
          $("#item1").removeClass('basis4');
          $("#item1").removeClass('basis5');
          $("#item1").removeClass('basis6');
  });

  $("#ob3").click(function() {
          $("#item1").addClass('basis3');
          $("#item1").removeClass('basis1');
          $("#item1").removeClass('basis2');
          $("#item1").removeClass('basis4');
          $("#item1").removeClass('basis5');
          $("#item1").removeClass('basis6');
  });
  $("#ob4").click(function() {
          $("#item1").addClass('basis4');
          $("#item1").removeClass('basis1');
          $("#item1").removeClass('basis3');
          $("#item1").removeClass('basis2');
          $("#item1").removeClass('basis5');
          $("#item1").removeClass('basis6');
  });

  $("#ob5").click(function() {
          $("#item1").addClass('basis5');
          $("#item1").removeClass('basis1');
          $("#item1").removeClass('basis3');
          $("#item1").removeClass('basis4');
          $("#item1").removeClass('basis2');
          $("#item1").removeClass('basis6');
  });
  $("#ob6").click(function() {
          $("#item1").addClass('basis6');
          $("#item1").removeClass('basis1');
          $("#item1").removeClass('basis3');
          $("#item1").removeClass('basis4');
          $("#item1").removeClass('basis5');
          $("#item1").removeClass('basis2');
  });

  });
