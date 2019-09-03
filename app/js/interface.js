$(document).ready(function() {
	flexibility(document.documentElement);
    //SUBMENU
	// $("body").on("click", ".top-menu__item--sub", function(){
	// 	$(this).toggleClass('active');
	// });
 //    $(document).click(function (e){ 
 //        var div = $(".top-menu__item--sub");
 //        if (!div.is(e.target)
 //            && div.has(e.target).length === 0) {
 //            $(".top-menu__item--sub").removeClass('active');
 //        }
 //    });


    //SUBMENU
    $("body").on("click", ".js-mobile-filter-toggle", function(e){
         e.preventDefault();
        $(this).next('.mobile-filter-toggle__list').slideToggle();
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


    //MOBILE-SEARCH
    $("body").on("click", ".js-top-search-mobile__toggle", function(){
        $('.top-search-mobile__form').show();
    });
    $("body").on("click", ".js-top-search-mobile__close", function(){
        $('.top-search-mobile__form').hide();
    });



    //MOBILE-CATALOG
    $("body").on("click", ".js-top-catalog__close", function(){
        $('.top-catalog__menu').hide();
        $('html').removeClass('hidden');
        $('.top-catalog__toggle').removeClass('active');
    });
    $("body").on("click", ".js-top-catalog-sub__toggle", function(){
        $(this).parents('.top-catalog__item').toggleClass('active');
        $(this).next('.top-catalog-sub').slideToggle(0);
    });




    //CATALOG
    $("body").on("click", ".js-top-catalog__toggle", function(){
        $(this).toggleClass('active');
        $('.top-catalog__menu').slideToggle(250);
        var x = window.matchMedia("(max-width: 600px)");
        ifMobileCheck(x);
        x.addListener(ifMobileCheck);
    });
    $(document).click(function (e){ 
        var div = $(".top-catalog");
        if (!div.is(e.target)
            && div.has(e.target).length === 0) {
            $(".top-catalog__menu").slideUp(250);
            $(".js-top-catalog__toggle").removeClass('active');
        }
    });

    function ifMobileCheck(x) {
        if (x.matches) { // If media query matches
            $('html').addClass('hidden');
        }
    }



    //MENU-MOBILE
    $("body").on("click", ".js-top-menu-mobile__toggle", function(){
        $('.menu-mobile-list').slideDown(100);

        $('html').addClass('hidden');
    });
    $("body").on("click", ".js-close-link", function(){
        $(this).parents('.menu-mobile-list').slideUp(100);
        $('html').removeClass('hidden');
    });
    //MOBILE-SUBMENU
    $("body").on("click", ".js-mobile-submenu-toggle", function(){
        $(this).parents('.menu-mobile-list__item').toggleClass('active');
        $(this).parents('.menu-mobile-list__item').find('.menu-mobile-list__submenu').slideToggle(100);
        $(this).toggleClass('active');
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


    //INPUT-FILE-CONTENT
    if ('#drop_zone_content'.length>0) {
        var dropZone = document.getElementById('drop_zone_content');
   
        if (dropZone) {
            dropZone.addEventListener('dragover', handleDragOver, false);
            dropZone.addEventListener('drop', handleFileSelect, false);
            
            document.getElementById('files').addEventListener('change', handleFileSelect2, false);
        }
    }
    //in-popup
    if ('#mob_drop_zone_content'.length>0) {
        var dropZone = document.getElementById('mob_drop_zone_content');
   
        if (dropZone) {
            dropZone.addEventListener('dragover', mob_handleDragOver, false);
            dropZone.addEventListener('drop', mob_handleFileSelect, false);
            
            document.getElementById('mob_files').addEventListener('change', mob_handleFileSelect2, false);
        }
    }



    //SUBSCRIBE-THANKS
    $("body").on("click", ".js-subscribe-thanks", function(e){
        e.preventDefault();
        $('.page-footer-subscribe__wrap').hide();
        $('.page-footer-subscribe__thanks').show();
        $('.page-footer-subscribe').addClass('active');
    });

    //FEEDBACK-THANKS
    $("body").on("click", ".js-feedback-thanks", function(e){
        e.preventDefault();
        $('.bottom-feedback-form__wrapper').hide();
        $('.bottom-feedback-thanks').show();
    });
    $("body").on("click", ".js-bottom-feedback-thanks__close", function(e){
        e.preventDefault();
        $('.bottom-feedback-form__wrapper').show();
        $('.bottom-feedback-thanks').hide();
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
            iconImageHref: "img/content/label.png", 
            iconImageSize: [40,60],
            iconImageOffset: [-20, -60]
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
            iconImageHref: "img/content/label.png", 
            iconImageSize: [40,60],
            iconImageOffset: [-20, -60]
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

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<div><li><strong>', escape(f.name), '</strong> (', f.type, ') - ', '<i>'+f.size+' байт</i></li>');
    }
    document.getElementById('list_content').innerHTML = '<div class="list_content_msg">Файл загружен:</div><ul>' + output.join('') + '</ul>';
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function handleFileSelect2(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type, ') - ', '<i>'+f.size+' байт</i></li>');
    }
    document.getElementById('list_content').innerHTML = '<div class="list_content_msg">Файл загружен:</div><ul>' + output.join('') + '</ul>';
}

  

function mob_handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files; // FileList object.

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<div><li><strong>', escape(f.name), '</strong> (', f.type, ') - ', '<i>'+f.size+' байт</i></li>');
    }
    document.getElementById('mob_list_content').innerHTML = '<div class="list_content_msg">Файл загружен:</div><ul>' + output.join('') + '</ul>';
}

function mob_handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

function mob_handleFileSelect2(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type, ') - ', '<i>'+f.size+' байт</i></li>');
    }
    document.getElementById('mob_list_content').innerHTML = '<div class="list_content_msg">Файл загружен:</div><ul>' + output.join('') + '</ul>';
}




// links pages
$('body').append(
	'<div style="position: fixed; z-index: 1005; bottom: 0; right: 0; background: #fff; border: solid 1px #828286; width: 200px;"> \
		<a href="javascript:void(0);" style="float: right;background:#ccc; color:#000; padding: 5px 10px; text-decoration: none; font-size: 16px" onclick="$(this).parent().hide()">Close X</a> \
	<style> \
		#pages { padding: 10px 20px 0 50px; font-size: 18px; } \
		#pages a { text-decoration: none; } \
		#pages li { margin: 5px 0; } \
	</style> \
	<ol id="pages"> \
		<li><a href="text.html">Text</a></li> \
		<li><a href="index.html">Index</a></li> \
        <li><a href="news.html">News</a></li> \
        <li><a href="reviews.html">Reviews</a></li> \
        <li><a href="brands.html">Brands</a></li> \
        <li><a href="brands-in.html">Brands-in</a></li> \
        <li><a href="downloads.html">Downloads</a></li> \
        <li><a href="downloads-in.html">Downloads-in</a></li> \
        <li><a href="downloads2.html">Downloads2</a></li> \
        <li><a href="projects.html">Projects</a></li> \
        <li><a href="project.html">Project</a></li> \
        <li><a href="contacts.html">Contacts</a></li> \
        <li><a href="object.html">Object</a></li> \
        <li><a href="catalog.html">Catalog</a></li> \
        <li><a href="catalog2.html">Catalog2</a></li> \
        <li><a href="catalog-category.html">Catalog-cat</a></li> \
        <li><a href="collection.html">Collection</a></li> \
        <li><a href="collection2.html">Collection2</a></li> \
        <li><a href="tech.html">тех-работы</a></li> \
        <li><a href="cookies.html">Куки</a></li> \
        <li><a href="page404.html">404</a></li> \
        <li><a href="gde_kupit.html">gde_kupit</a></li> \
	</ol> \
</div>');
