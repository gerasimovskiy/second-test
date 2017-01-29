;(function($){
	"use strict";

	$(function(){
		$('.sliders').slick({
			dots:false,
			infinite: true,
  		slidesToShow: 1,
  		slidesToScroll: 1,
  		slide: "img",
  		prevArrow: ".sliders__prev-arrow",
  		nextArrow: ".sliders__next-arrow"
  		// responsive: [breakpoin.....]адаптивность
		});
	});


	$(function(){
		$('.isotop-content').isotope({
			itemSelector: "div[class^='img']",
			layoutMode: 'masonry'
		});

	$('.isotop-filter ul li').click(function(){
		$('.isotop-filter ul li').removeClass('active');
		$(this).addClass('active');

		var trigger = $(this).attr('data-filter');
		$('.isotop-content').isotope({
			filter: trigger
		});
	});
	});
})(jQuery);