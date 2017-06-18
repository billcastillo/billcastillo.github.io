  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $(document).ready(function() {
    var winHeight = $(window).height() / 2;
    $('.indexSplash__header').css('height', winHeight);
    $('#indexDescription').css('height', winHeight);
  }); // end document.ready

  /*
  window.onload = function(){ 
    var indexSplash = document.getElementsByClassName('indexSplash__header')[0];
    var indexDesc = document.getElementsById('indexDescription');
    var getHeight = indexSplash.offsetHeight / 2;
    indexSplash.style.height = getHeight + 'px';
    indexDesc.style.height = getHeight + 'px';
  };
  */