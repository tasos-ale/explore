$(document).bind("mobileinit", function(){
  $.mobile.defaultPageTransition = 'none';//default=fade
  $.mobile.loader.prototype.options.text = "loading";
  $.mobile.loader.prototype.options.textVisible = true;
});