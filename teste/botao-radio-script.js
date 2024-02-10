$(document).ready(function() {
  $(".tipo-massa input").hover(function() {
    $(this).css("background-color", "#f0f0f0");
  }, function() {
    $(this).css("background-color", "white");
  });

  $(".tipo-massa input").focus(function() {
    $(this).css("outline", "none");
    $(this).css("border", "1px solid #000");
  });
});
