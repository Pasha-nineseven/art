$(document).ready(function() {
    //main-products-slider
	if ($('.main-products__slider').length>0) {
		var $gallery = $('.main-products__slider');

	    $gallery.slick({
			speed: 250,
			swipe: true,
			swipeToSlide: true,
			touchThreshold: 10,
			arrows:true,
			dots:false,
			useTransform:true,
			accessibility: false,
			infinite: false,
			slidesToShow: 6,
  			slidesToScroll: 1,
  	// 		responsive: [
			//     {
			//       breakpoint: 800,
			//       settings: {
			//         slidesToShow: 2,
			//         slidesToScroll: 1,
			//       }
			//     },
			// ]
	    });
	};


	$(".index-partners__wrap").mCustomScrollbar({
		axis:"x",
		theme:"dark",
		autoExpandScrollbar: true,
		contentTouchScroll:true,
	});
});
