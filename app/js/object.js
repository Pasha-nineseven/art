$(document).ready(function() {
	if ($('.object-slider').length>0) {
        var $gallery = $('.object-slider');

        $gallery.slick({
            speed: 250,
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
            adaptiveHeight: true
            // responsive: [
            //     {
            //       breakpoint: 1000,
            //       settings: {
            //         slidesToShow: 3,
            //         slidesToScroll: 1,
            //       }
            //     },
            //     {
            //       breakpoint: 700,
            //       settings: {
            //         slidesToShow: 2,
            //         slidesToScroll: 1,
            //       }
            //     },
            // ]
        });
    };
});