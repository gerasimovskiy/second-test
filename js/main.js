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




	function valid(el, pattern, msgEl) {
		var res = el.val().search(pattern);
		if (res == -1) {
			return msgEl;
		} else {
			return '';
		}
	};

	function validPassword(el) {
		var msgEl = '',
			res1 = el.val().search(/[A-Z]/),
			res2 = el.val().search(/[a-z]/),
			res3 = el.val().search(/[0-9]/);
		if (res1 == -1 || res2 == -1 || res3 == -1) {
			msgEl += 'Use also ';
			if (res1 == -1) msgEl += 'uppercase letters';
			if (res1 == -1 && res2 == -1) msgEl += ', ';
			if (res2 == -1) msgEl += 'lowercase letters';
			if (res1 == -1 && res3 == -1 || res2 == -1 && res3 == -1) msgEl += ', ';
			if (res3 == -1) msgEl += 'number';
			msgEl += ' in the password.';
		};
		return msgEl;
	}

	$('.trynow-form__btn').on('click', function(e) {
		var msg = '';
		msg += valid($('[name="name"]'),/^[a-zA-Z0-9]{1,}$/,'Use Latin letters and numbers in the name. ');
		msg += valid($('[name="email"]'),/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/,'E-mail isn\'t correct. ');
		msg += validPassword($('[name="pass"]'));
		
		if (msg != '') {
			alert(msg);
			return false;
		}
	});

	// $('.footer__button').on('click', function(e) {
	// 	var msg = '';
	// 	msg += valid($('[name="emailnews"]'),/^[a-z0-9._]+@[a-z0-9.-]+\.[a-z]{2,4}$/,'E-mail isn\'t correct.');

	// 	if (msg != '') {
	// 		alert(msg);
	// 		return false;
	// 	}
	// });



})(jQuery);