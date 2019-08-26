$(document).ready(function() {
    ymaps.ready(initializeDefaultMap);
});


function initializeDefaultMap() {
    if ($('#map-default').length>0) {

        var myMap = new ymaps.Map("map-default", {
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


        myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 20, top: 50 }}}));
        myMap.behaviors.disable('scrollZoom');

        myMap.geoObjects.add(myPlacemark);
    }
}
