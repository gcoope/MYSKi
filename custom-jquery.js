$(document).bind("mobileinit", function() {
      // Global init settings
      $.mobile.defaultPageTransition = 'none';
      $.mobile.page.prototype.options.addBackBtn = true;
      $.mobile.useFastClick  = false;
});

function goBack() {
  window.history.back()
}