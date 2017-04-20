$(document).ready(function(){
  $("#btn").click(function() {
          $("#aqui").addClass('btn');
          $("#aqui").removeClass('btn-border');
  });
  $("#btnB").click(function() {
          $("#aqui").addClass('btn-border');
          $("#aqui").removeClass('btn');
  });









  $("#small").click(function() {
          $("#aqui").addClass('btn-small');
          $("#aqui").removeClass('btn-big');
          $("#aqui").removeClass('normal');
  });
  $("#big").click(function() {
          $("#aqui").addClass('btn-big');
          $("#aqui").removeClass('btn-small');
          $("#aqui").removeClass('normal');
  });

  $("#df").click(function() {
          $("#aqui").addClass('normal');
          $("#aqui").removeClass('btn-big');
          $("#aqui").removeClass('btn-small');
  });


  $("#en").click(function() {
    $("#aqui").addClass('enabled');
    $("#aqui").removeClass('disabled');
  });
  $("#ds").click(function() {
    $("#aqui").addClass('disabled');
    $("#aqui").removeClass('enabled');
  });


















});
