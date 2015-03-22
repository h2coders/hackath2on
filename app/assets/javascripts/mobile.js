$(document).ready(function() {

  $(".innerContainer").hide();
  $(".showing").show();
  $('.tabbar a').click(function (e) {
    e.preventDefault();
    if ($(this).data("container") != $(".showing").data("container") {
      $(this).parent().removeClass("active");
      $(".showing").hide();
      $(".showing").removeClass("showing");
      var container = $(this).data("container");
      $(container).show();
      $(this).parent().addClass("active");
    };
  });
});