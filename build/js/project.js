$(document).ready(function() {
	//project-SLIDER 
	if ($('.project-slider').length>0) {
        var time = 5;
        var $bar,
            $gallery,
            isPause,
            tick,
            percentTime;
        var $gallery = $('.project-slider');
        var $status = $('.pagingInfo i');
        var $statusCount = $('.pagingInfo span');

        $gallery.on('init', function(event, slick, currentSlide){
            var slideCurrent = slick.currentSlide+1;
            $('#counter').addClass('activeSlide-' + slideCurrent);

            if (!($('.project-slider .slick-slide').length > 1)) {
                $('.project-prev').hide();
                $('.project-next').hide();
            }
        });
        // $gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        //     var slideCurrent = slick.currentSlide+1;
        //     $('#counter').removeClass();
        //     $('#counter').addClass('activeSlide-' + slideCurrent);
        //     $('#counter').removeClass('last-slide');
        // });
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
            prevArrow: $(".project-prev"),
            nextArrow: $(".project-next"),
            pauseOnDotsHover: true,
            responsive: [
			    {
			      breakpoint: 600,
			      settings: {
			        dots:true
			      }
			    },
			]
        });
    };



    setFullWidthLargeWrap();



    //main-products-slider
	if ($('.use__slider').length>0) {
		var $gallery = $('.use__slider');

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
			slidesToShow: 4,
  			slidesToScroll: 1,
  			responsive: [
			    {
			      breakpoint: 1000,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			      }
			    },
			    {
			      breakpoint: 700,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 1,
			      }
			    },
			    // {
			    //   breakpoint: 600,
			    //   settings: {
			    //     slidesToShow: 3,
			    //     slidesToScroll: 1,
			    //   }
			    // },
			    // {
			    //   breakpoint: 500,
			    //   settings: {
			    //     slidesToShow: 2,
			    //     slidesToScroll: 1,
			    //   }
			    // },
			]
	    });
	};
});

$(window).resize(function () {
	setFullWidthLargeWrap();
});




function setFullWidthLargeWrap(){
	if ($('.container-fullwidthLargeWrap__img').length>0) {
		var fullWidth = $('.layout').innerWidth(),
			containerWidth = $('.indent').innerWidth(),
			halfWidthIndent = -(fullWidth - containerWidth)/2; 
		$('.container-fullwidthLargeWrap__img').css({
			transform: 'translate(' + halfWidthIndent + 'px, 0px)',
			MozTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			WebkitTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			msTransform: 'translate(' + halfWidthIndent + 'px, 0px)'
		})
	}
}