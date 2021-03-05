
$(document).ready(function() {
	function header() {
		$(window).height();
		$(window).width() > 767;
	}

	$(".fancylight").fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
    

});


$(document).ready(function() {
	$(".container-masonry2").isotope({
      itemSelector : ".col-lg-3",
			layoutMode : "masonry",
			masonry : {
				columnWidth : 0,
				gutter : 0
			}
    });
});




// Initialize Foundation
$(document).foundation();
$(window).load(function() {
  $('.container-masonry').isotope({
    itemSelector: '.col-lg-3',
    layoutMode : "masonry",
    masonry : {
				columnWidth : 0,
				gutter : 0
			}
  });
});

// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.sidebar-nav li a').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.container-masonry').isotope({
			itemSelector: '.col-lg-3'
		}, 500);
	});
});


$(window).load(function() {
  $('.container-masonry3').isotope({
    itemSelector: '.col-lg-3',
    layoutMode : "masonry",
    masonry : {
				columnWidth : 0,
				gutter : 0
			}
  });
});

// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.sidebar-nav li a').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.container-masonry3').isotope({
			itemSelector: '.col-lg-3'
		}, 500);
	});
});


$(window).load(function() {
  $('.container-masonry4').isotope({
    itemSelector: '.col-lg-3',
    layoutMode : "masonry",
    masonry : {
				columnWidth : 0,
				gutter : 0
			}
  });
});

// Reinitialize masonry inside each panel after the relative tab link is clicked - 
$('.sidebar-nav li a').on('click', function() {
	// do async to allow menu to open
	setTimeout( function() {
		$('.container-masonry4').isotope({
			itemSelector: '.col-lg-3'
		}, 500);
	});
});