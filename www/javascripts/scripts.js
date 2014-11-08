
$(document).ready(function(){/* activate scrollspy menu */
$('body').scrollspy({
  target: '#navbar-collapsible',
  offset: 50
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 50
        }, 1000);
        return false;
      }
    }
});

$('.nav a').on('click', function(){
    $(".btn-navbar").click(); //bootstrap 2.x
    $(".navbar-toggle").click() //bootstrap 3.x by Richard
});

 $('#main-nav').hide();
$(window).scroll(function() {
    if ($(this).scrollTop() > 900)
     {
        $('#main-nav').fadeIn();
     }
    else
     {
      $('#main-nav').fadeOut();
     }
 });

});