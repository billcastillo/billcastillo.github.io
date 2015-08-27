//ANCHOR SMOOTH SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

//WOW JS
wow = new WOW(
{
  boxClass:     'animate',      // default
  animateClass: 'animated', // default
  offset:       -50,          // default
  mobile:       true,       // default
  live:         true       // default
})
wow.init();