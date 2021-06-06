$(document).ready(function() {
  $('.menu > li > a').click(function(event) {
    event.preventDefault();
    $(this).parent().siblings().find('ul').slideUp();
    $(this).parent().find('ul').slideToggle();
  });

  // lightbox 效果
  lightbox.option({
    'resizeDuration': 2000,
    'wrapAround': true
  });
  $(window).load(function() {
    $('#slider').nivoSlider(); 
});
});