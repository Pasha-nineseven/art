$(document).ready(function() {
	ymaps.ready(initializeСontactsMap);
   // ymaps.ready(initializeContactsMapStock);



    if ($('.contacts-slider').length>0) {
        var $gallery = $('.contacts-slider');

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
            nextArrow: $('.contacts-next'),
        });
    };
});


// functions
var contactsMap,
    contactsMapStock;

function initializeСontactsMap() {
    if ($('#contacts-map-office').length>0) {

        contactsMap = new ymaps.Map("contacts-map-office", {
            center:[53.899888,27.566757],
            zoom: 13,
            controls: []
        }, {
            suppressMapOpenBlock: true
        }); 

          

        var placemark1 = new ymaps.Placemark([53.899888,27.566757], {
            balloonContentHeader: '<div class="placemark-address">г.Минск, ул.Скрыганова 3к2, офис 23</div>',
            balloonContentBody: '<a class="placemark-phone" href="tel:+375291994451">+375 (29) 199-44-51 <span class="tg-icon"><img src="img/svg/tg-icon.svg" alt=""></span><span class="vb-icon"><img src="img/svg/viber-icon.svg" alt=""></span><span class="ph-icon"><img src="img/svg/phone-icon.svg" alt=""></span></a>' +
                '<div class="placemark-time-wrap"><span class="placemark-time-icon"><img src="img/content/time-icon.png" alt=""></span><div class="placemark-time">пн-пт с 9:00 до 17:00</div>' +
                '<div class="placemark-time">сб с 10:00 до 17:00</div></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: "img/content/label-c.png", 
            iconImageSize: [28,36],
            iconImageOffset: [-14, -36]
        });

        var placemark2 = new ymaps.Placemark([53.897888, 27.586757], {
            balloonContentHeader: '<div class="placemark-address">г.Минск, ул.Скрыганова 18, офис 213</div>',
            balloonContentBody: '<a class="placemark-phone" href="tel:+375291994452">+375 (29) 199-44-52 <span class="ph-icon"><img src="img/svg/phone-icon.svg" alt=""></span></a>' +
                '<div class="placemark-time-wrap"><span class="placemark-time-icon"><img src="img/content/time-icon.png" alt=""></span><div class="placemark-time">пн-пт с 9:00 до 17:00</div>' +
                '<div class="placemark-time">сб с 10:00 до 12:00</div></div>'
        }, {
            iconLayout: 'default#image',
            iconImageHref: "img/content/label-c.png", 
            iconImageSize: [28,36],
            iconImageOffset: [-14, -36]
        });


        contactsMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        contactsMap.behaviors.disable('scrollZoom');

        contactsMap.geoObjects.add(placemark1);
        contactsMap.geoObjects.add(placemark2);

        placemark1.balloon.open();

    }
}
