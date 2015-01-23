(function($){
  $(function(){

    $('.button-collapse').sideNav();
	
	function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'})
    }
  }); // end of document ready
})(jQuery); // end of jQuery name space