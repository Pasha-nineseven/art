$(document).ready(function() {
	//MAIN-SLIDER 
	if ($('.main-slider').length>0) {
        var time = 5;
        var $bar,
            $gallery,
            isPause,
            tick,
            percentTime;
        var $gallery = $('.main-slider');
        var $status = $('.pagingInfo i');
        var $statusCount = $('.pagingInfo span');

        $gallery.on('init', function(event, slick, currentSlide){
            var slideCurrent = slick.currentSlide+1;
            $('#counter').addClass('activeSlide-' + slideCurrent);

            if (!($('.main-slider .slick-slide').length > 1)) {
                // remove arrows
                $('.main-prev').hide();
                $('.main-next').hide();
            }
        });
        $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var slideCurrent = slick.currentSlide+1;
            $('#counter').removeClass();
            $('#counter').addClass('activeSlide-' + slideCurrent);
            $('#counter').removeClass('last-slide');
        });
        $gallery.on("afterChange", function(event, slick, currentSlide){
            var slideCurrent = slick.currentSlide+1;
            $('#counter').removeClass();
            $('#counter').addClass('activeSlide-' + slideCurrent);
            if (slick.$slides.length-1 == currentSlide) {
		    	$('#counter').addClass('last-slide');
		  	}
        });

        $gallery.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
	        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
	        var i = (currentSlide ? currentSlide : 0) + 1;
	        $status.text('0' + i);
	        $statusCount.text('0' + slick.slideCount);
	    });

        $gallery.slick({
            swipe: true,
            swipeToSlide: true,
            touchThreshold: 10,
            arrows:true,
            dots:false,
            useTransform:true,
            accessibility: false,
            infinite: true,
            fade: true,
            prevArrow: $(".main-prev"),
            nextArrow: $(".main-next"),
            //autoplay: true,
           // autoplaySpeed: 4000,
            pauseOnDotsHover: true,
            // pauseOnHover: true,
        });
    };


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
  			responsive: [
			    {
			      breakpoint: 850,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 700,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 600,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			]
	    });
	};

	if ($('.index-info-articles-slider').length>0) {
		var $gallery = $('.index-info-articles-slider');

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
			slidesToShow: 1,
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
		//moveDragger:true,
	});
});
