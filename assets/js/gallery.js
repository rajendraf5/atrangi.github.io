var appMaster = {
	/*----------------------------------------------
	 -----------sticky Header  Function  --------------------
	 -------------------------------------------------*/
	headerJs: function(){
	function header() {
		$(window).height();
		$(window).width() > 767;
	}

	var header_fix = $(".header");
	var inner_header = $(".inner-inro");
	$(window).scroll(function() {
		$(this).scrollTop() > 1 ? (header_fix.addClass("sticky"), inner_header.css("z-index", "-1")) : (header_fix.removeClass("sticky"), inner_header.css("z-index", "auto"));
	}), header(), $(window).resize(function() {
		header();
	});
},
	/*----------------------------------------------
	 -----------Submenu Function -------
	 -------------------------------------------------*/
	mobileMenuJs: function(){
	 $('.sub-menu >a').on('click', function() { 
        if ($(window).width() <= 767) {
            $('.sub-menu').removeClass('on');
            $('.sub-menu> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') == true) {
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
    });
    
   

	},
	/*----------------------------------------------
	 -----------Masonry Function  --------------------
	 -------------------------------------------------*/
	masonryJs: function(){
	var container_masonry = $(".container-masonry");
	container_masonry.imagesLoaded(function() {
		container_masonry.isotope({
			itemSelector : ".col-lg-3",
			layoutMode : "masonry",
			masonry : {
				columnWidth : 0,
				gutter : 0
			}
		});
	});

	/*----------------------------------------------
	 -----------Masonry filter Function  --------------------
	 -------------------------------------------------*/
	var container_filter = $(".container-filter");
	container_filter.on("click", ".categories", function() {
		var a = $(this).attr("data-filter");
		container_masonry.isotope({
			filter : a
		});

	});
	/*----------------------------------------------
	 -----------Masonry filter Active Function  --------------------
	 -------------------------------------------------*/
	container_filter.each(function(e, a) {
		var i = $(a);
		i.on("click", ".categories", function() {
			i.find(".active").removeClass("active"), $(this).addClass("active");
		});
	});

	/*----------------------------------------------
	 -----------Masonry Grid view Function  --------------------
	 -------------------------------------------------*/
	var container_grid = $(".container-grid");
	container_grid.imagesLoaded(function() {
		container_grid.isotope({
			itemSelector : ".nf-item",
			layoutMode : "fitRows"
		});
	});

	/*----------------------------------------------
	 -----------Masonry Grid Filter Function  --------------------
	 -------------------------------------------------*/
	container_filter.on("click", ".categories", function() {
		var e = $(this).attr("data-filter");
		container_grid.isotope({
			filter : e
		});
	});
	},
	
	/*----------------------------------------------
	 -----------Light Function  --------------------
	 -------------------------------------------------*/
	fancyboxJs: function(){
	var fLight = $(".fancylight");
	if (fLight.length) {
		fLight.fancybox({
			openEffect : 'elastic',
			closeEffect : 'elastic',
			helpers : {
				media : {}
			}
		});
	}
},
	
	


	prettyPhoto: function(){
		(function($) {
			"use strict";
			if( $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").length != 0 ) { 
			 $("a[rel^='prettyPhoto'], a[data-rel^='prettyPhoto']").prettyPhoto({hook: 'data-rel', theme: "dark_square", social_tools: false, deeplinking: false});
			}
		 })(jQuery);
	},
	
	

	/* --------------------------------------------
	Product Zoom
	-------------------------------------------- */	
	productZoom: function(){	
		if ( $( ".single-product" ).length !== 0 ) {
			var zoomWindowWidth;
			var zoomWindowHeight;
			
			 zoomWindowWidth    : 400;
			 zoomWindowHeight   : 470;	
			 zoomType   = 'window';
			 
			if ($(window).width() < 992) {
				 zoomWindowWidth    : 0;
				 zoomWindowHeight   : 0;	
				 zoomType   = 'inner';
			}
			
			$("#zoom-product").elevateZoom({				
			gallery:'zoom-product-thumb', 
			cursor: 'pointer', 
			galleryActiveClass: 'active', 
			imageCrossfade: true,
			responsive: true,
			scrollZoom: false,
			zoomWindowWidth    : zoomWindowWidth,
			zoomWindowHeight   : zoomWindowHeight,
			zoomType		: zoomType	
			}); 

			$("#zoom-product").bind("click", function(e) {  
			  var ez =   $('#zoom-product').data('elevateZoom');	
				$.fancybox(ez.getGalleryList());
			  return false;
			});
			
		}
		
		$('.plus').click(function() {
				$(this).parent('.product-regulator').find('.output').html(function(i, val) { return val*1+1 });
			});
			$('.minus').click(function() {
				var ab = $(this).parent('.product-regulator').find('.output').html();
				if(1 <= ab){
					$(this).parent('.product-regulator').find('.output').html(function(i, val) { return val*1-1 });
				}
				
			});	
	}
};

$(document).ready(function() {
	"use strict";
	appMaster.headerJs();
	appMaster.masonryJs();
	appMaster.fancyboxJs();
	appMaster.prettyPhoto();
	appMaster.productZoom();	
	
}); 

