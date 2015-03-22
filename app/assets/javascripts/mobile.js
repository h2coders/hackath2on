$(document).ready(function() {

  $(".container div").hide();
  $(".showing").show();
  $('.tabbar a').click(function (e) {
    e.preventDefault();
    // if ($(this).data("container") == ) {};
    $(".showing").hide();
    $(".showing").removeClass("showing");
    var container = $(this).data("container");
    $(container).show();
  });
});