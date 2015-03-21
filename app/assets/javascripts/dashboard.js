// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/
// $(document).ready(function() {
//   $(".widget-container").on("click", function(){
//     $(this).addClass( "widget-active" );
//     $(this).parent().removeClass( "col-md-4" );
//   });

//   $(".close").on( "click", function(e){
//     $(this).parent().removeClass( "widget-active" );
//     $(this).parent().parent().addClass( "col-md-4" );
//      e.stopPropagation();
//   });
// });
$(document).ready(function() {
  $(".gridster ul").gridster({
    widget_margins: [10, 10],
    widget_base_dimensions: [140, 140], 
    max_size_x: 9
  });
});