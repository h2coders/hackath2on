// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
$(document).ready(function() {
  $(".widget-container").on( "click", function(){
    $(this).addClass( "widget-active" );
  });

  $(".close").on( "click", function(){
    $(".widget-active").removeClass( "widget-active" );
  });
});