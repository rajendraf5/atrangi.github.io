jQuery(document).ready(function( $ ) {

  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function(){
    $('html, body').animate({scrollTop : 0},1500, 'easeInOutExpo');
    return false;
  });

    // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //   autoplay: true,
  //   nav: false,
  //   dots: true,
  //   loop: true,
  //   navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  //   responsive: { 0: { items: 2 }, 768: { items: 3 }, 900: { items: 6 }
  //   }
  // });

   // jQuery counterUp (used in Facts section)
  // $('[data-toggle="counter-up"]').counterUp({
  //   delay: 10,
  //   time: 1000
  // });

   // timeline carousel (uses the Owl Carousel library)
  // $(".team-carousel").owlCarousel({
  //  autoplay: true,
  //   nav: true,
  //   dots: true,
  //   loop: true,
  //   navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
  //   responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 3 }
  //   }
  // });

  //   $(function(){
  //   var $page = jQuery.url.attr("file");
  //   $('ul.nav-menu li a').each(function(){
  //     var $href = $(this).attr('href');
  //     if ( ($href == $page) || ($href == '') ) {
  //       $(this).addClass('active');
  //     } else {
  //       $(this).removeClass('active');
  //     }
  //   });
  // });
});

 $(".owl-carousel").each(function (index) {
        var items = $(this).data('items'),
            autoplay = $(this).data('autoplay'),
            margin = $(this).data('margin'),
            loop = $(this).data('loop'),
            center = $(this).data('center'),
            dots = $(this).data('dots'),
            nav = $(this).data('nav');
        $(this).owlCarousel({
            items: items,
            autoplay: autoplay,
            margin: margin,
            autoplayHoverPause: true,
            smartSpeed: 450,
            loop: loop,
            center: center,
            dots: dots,
            dotsEach: true,
            nav: nav,
            //navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                640: {
                    items: 1
                },
                960: {
                    items: 2
                },
                1200: {
                    items: 3
                },
                1600: {
                    items: items
                }
            }
        });
    });

 // stickey menu
    $(window).on('scroll',function() {    
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();
        
        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky");
        }else{
            $("#sticky-header").removeClass("sticky");
        }
    });

    $(document).ready(function(){
        // Add minus icon for collapse element which is open by default
        $(".collapse.show").each(function(){
          $(this).prev(".panel-heading").find(".fa").addClass("fa-minus").removeClass("fa-plus");
        });
        
        // Toggle plus minus icon on show hide of collapse element
        $(".collapse").on('show.bs.collapse', function(){
          $(this).prev(".panel-heading").find(".fa").removeClass("fa-plus").addClass("fa-minus");
        }).on('hide.bs.collapse', function(){
          $(this).prev(".panel-heading").find(".fa").removeClass("fa-minus").addClass("fa-plus");
        });
    });

   // Closes responsive menu when a scroll trigger link is clicked
  $('.page-scroll').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

   // aos animation //
 $(document).ready(function() {
      $('.slider2').ClassySlider();
      AOS.init({
     duration: 1200,
    })
});

  window.onload = function () {
		lax.setup();
		const e = () => {
			lax.update(window.scrollY), window.requestAnimationFrame(e)
		};
		window.requestAnimationFrame(e)
	};

!function(a) {
    //"use strict";
    a(".page-scroll").bind("click", function(b) {
        var c = a(this);
        a("html, body").stop().animate({
            scrollTop: a(c.attr("href")).offset().top - 80
        }, 1250, "easeInOutExpo"), b.preventDefault();
    }), a("body").scrollspy({
        target: ".navbar",
        offset: 81
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click();
    });
}(jQuery);


