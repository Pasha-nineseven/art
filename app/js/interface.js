$(document).ready(function() {
	flexibility(document.documentElement);
    //SUBMENU
	$("body").on("click", ".top-menu__item--sub", function(){
		$(this).addClass('active');
	});
    $(document).click(function (e){ 
        var div = $(".top-menu__item--sub");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".top-menu__item--sub").removeClass('active');
        }
    });

    //PHONE-TOGGLE
    $("body").on("click", ".js-phone-link", function(){
        $(this).next('.phone-list').toggleClass('active');
    });
    $(document).click(function (e){ 
        var div = $(".page-header-contacts__item--phone");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".phone-list").removeClass('active');
        }
    });

	setFullWidth();
    ymaps.ready(initializeMapOffice);
    ymaps.ready(initializeMapStock);

	//FS
    if ($('.fs').length>0) {
    	$('.fs').styler();
    }
    //TABS
    if ($('.resp-tabs').length>0) {
        $('.resp-tabs').responsiveTabs({
            startCollapsed: 'accordion'
        });
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

    //POPUP-GALLERY
	$(".js-gallery").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        idleTime: false,
        buttons: [
            "close"
        ],
        image : {
            protect : true,
        },
    });

    //POPUP-INLINE
    $(".js-popup-inline").fancybox({
        speed : 330,
        transitionEffect: "slide", 
        animationEffect: "zoom-in-out", 
        infobar: false,
        buttons: [
            "close"
        ],
    });
    $("body").on("click", ".js-popup-close", function(e){
        e.preventDefault();
        parent.jQuery.fancybox.getInstance().close();
    });

    //ACCORDEON
    $("body").on("click", ".accordeon__link", function(e){
        e.preventDefault();
        $(this).parents('.accordeon__item').toggleClass('active');
        $(this).next('.accordeon__info').slideToggle();
    });


    //FOOTER-MAP
    $("body").on("click", ".js-map-toggle", function(e){
        e.preventDefault();
        var tab_id = $(this).attr('data-tab');

        $('.bottom-feedback-map__link').removeClass('active');
        $('.toggle-map').removeClass('visible');

        $(this).addClass('active');
        $("#"+tab_id).addClass('visible');
        mapOffice.container.fitToViewport();
        mapStock.container.fitToViewport();
    });
});




$(window).resize(function () {
	setFullWidth();
});

// $(window).load(function(){

// });

// functions
var mapOffice,
    mapStock;

function initializeMapOffice() {
    if ($('#map-office').length>0) {
        mapOffice = new ymaps.Map("map-office", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });     
        var myPlacemark = new ymaps.Placemark([53.899888,27.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [52,60],
            iconImageOffset: [-26, -60]
        }); 
        mapOffice.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        mapOffice.behaviors.disable('scrollZoom');
        mapOffice.geoObjects.add(myPlacemark);
    }
}

function initializeMapStock() {
    if ($('#map-stock').length>0) {
        mapStock = new ymaps.Map("map-stock", {
            center:[52.899888,26.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true
        });      
        var myPlacemark2 = new ymaps.Placemark([52.899888,26.566757],{
                // balloonContentBody: 'Адрес',
            },{
            iconLayout: 'default#image',
            iconImageHref: "img/svg/label.svg", 
            iconImageSize: [52,60],
            iconImageOffset: [-26, -60]
        }); 
        mapStock.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        mapStock.behaviors.disable('scrollZoom');
        mapStock.geoObjects.add(myPlacemark2);
    }
}

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
