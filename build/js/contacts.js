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

        var coords = [
            [[53.899888,27.566757], 'адрес 1'],
            [[53.897888, 27.586757],'адрес 2'],
        ],
        myCollection = new ymaps.GeoObjectCollection({}, {
            iconLayout: 'default#image',
            iconImageHref: "img/content/label-c.png", 
            iconImageSize: [28,36],
            iconImageOffset: [-14, -36]
        });

        for (var i = 0; i < coords.length; i++) {
            myCollection.add(new ymaps.Placemark(coords[i][0],{
                balloonContentHeader: "Метка",
                balloonContentBody: coords[i][1],
                balloonContentFooter: "Время работы",
            }));
        } 


        contactsMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        contactsMap.behaviors.disable('scrollZoom');

        contactsMap.geoObjects.add(myCollection);

    }
}
