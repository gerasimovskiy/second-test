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
	})
})(jQuery);