$(document).ready(function() {
	flexibility(document.documentElement);
	// $("body").on("click", ".test", function(e){
	// 	e.preventDefault();
	// })

	setFullWidth();

	//FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    }

    //TOOLTIP
	if ($('.tooltip').length>0) {
		$('.tooltip').tooltipster({
			animation: 'fade',
   			delay: 100,
            trigger:"custom",
            triggerOpen: {
              mouseenter: true,  // For mouse
              tap: true    // For touch device
            },
            triggerClose: {
              mouseleave: true,  // For mouse
              tap: true    // For touch device
            }
		});
	};

    //DATEPICKER
    if ($('.input-calendar').length>0) {
		$('.input-calendar').datepicker({
			dateFormat : "dd-mm-yy",
			minDate: new Date($('#hiddendelivdate').val()),
			monthNames : ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			dayNamesMin : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		});
	}


	$(".js-gallery").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        //toolbar  : false,
        infobar: false,
        idleTime: false,
        // onActivate: function(){
        //     alert(1);
        //     $(".fancybox-caption").clone().appendTo(".fancybox-content"); 
        // },
        // beforeShow: function(){
        //     var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        //     if (is_Mac){
        //         $('.page-header').addClass('mHidden');
        //     }
        //     $('.page-header').css({'overflow-y': 'scroll'});
        //     $('#pages').hide();
        // },
        // afterClose: function() {
        //     var is_Mac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
        //     if (is_Mac){
        //         $('.page-header').removeClass('mHidden');
        //     }
        //     $('.page-header').css({'overflow-y': 'visible'});
        //     $('#pages').show();
        // },
        buttons: [
            "close"
        ],
        image : {
            protect : true,
        },
        // caption : function( instance, item ) {
        //     var caption = $(this).data('caption') || '';
        //     return ( caption.length ? caption : '' ) + '<span data-fancybox-index></span> из <span data-fancybox-count></span>';
        // },
    });

});




$(window).resize(function () {
	setFullWidth();
});

// $(window).load(function(){

// });

// functions

function setFullWidth(){
	if ($('.container-fullwidth__img').length>0) {
		var fullWidth = $('.layout').innerWidth(),
			containerWidth = $('.page-content > .container-fluid').innerWidth(),
			halfWidthIndent = -(fullWidth - containerWidth)/2; 
		$('.container-fullwidth__img').css({
			transform: 'translate(' + halfWidthIndent + 'px, 0px)',
			MozTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			WebkitTransform: 'translate(' + halfWidthIndent + 'px, 0px)',
			msTransform: 'translate(' + halfWidthIndent + 'px, 0px)'
		})
	}
}


// links pages
// $('body').append(
// 	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
// 		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
// 	<style> \
// 		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
// 		#pages a { text-decoration: none; } \
// 		#pages li { margin: 5px 0; } \
// 	</style> \
// 	<ol id="pages"> \
// 		<li><a href="about.html">About</a></li> \
// 		<li><a href="index.html">Index</a></li> \
// 	</ol> \
// </div>');
