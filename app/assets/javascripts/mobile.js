$(document).ready(function() {
  debugger;
  var tabItems = $('.tabbar ul li a'),
      tabContentWrapper = $('.mobile-content');
debugger;
  tabItems.on('click', function(event){
    debugger;
    event.preventDefault();
    alert("clicat");
    var selectedItem = $(this);
    if( !selectedItem.hasClass('selected') ) {
      var selectedTab = selectedItem.data('content'),
        selectedContent = tabContentWrapper.find('li[data-content="'+selectedTab+'"]');
      
      tabItems.removeClass('selected');
      selectedItem.addClass('selected');
      selectedContent.addClass('selected').siblings('li').removeClass('selected');
    }
  });
});