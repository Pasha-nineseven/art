$(document).ready(function() {
	//MAP
	if($('#where-map').length){
		ymaps.ready(initPharmaciesListMap);
	}

});

// Карта списка
function initPharmaciesListMap() {

	// Создание экземпляра карты.
	var myMap = new ymaps.Map('where-map', {
			center: [52.110080, 23.670247],
			zoom: 13,
			controls: []
	}); 
	// Контейнер для городов.
	listBrest = $('.where-select__list-brest');
	listMinsk = $('.where-select__list-minsk');
	listVitebsk = $('.where-select__list-vitebsk');
	
	for (var i = 0; i < citiesBrest.length; i++) {
		createSelectCities(citiesBrest[i]);
	}

	for (var j = 0; j < citiesBrest.length; j++) {
		createList(citiesBrest[j], cluster, listBrest);
	}

	for (var i = 0; i < citiesMinsk.length; i++) {
		createSelectCities(citiesMinsk[i]);
	}

	for (var j = 0; j < citiesMinsk.length; j++) {
		createList(citiesMinsk[j], cluster, listMinsk);
	}

	for (var i = 0; i < citiesVitebsk.length; i++) {
		createSelectCities(citiesVitebsk[i]);
	}

	for (var j = 0; j < citiesVitebsk.length; j++) {
		createList(citiesVitebsk[j], cluster, listVitebsk);
	}


	if ($(window).width() <= 1023)
		myMap.setCenter([52.093904, 23.704880]);

	function createSelectCities () {
		// Кластер для геообъектов группы
		cluster = new ymaps.Clusterer({
			clusterDisableClickZoom: false,
			gridSize: 64,
			clusterIcons: [{
				href:'img/content/cluster.png',
				size:[28,36],
				offset:[-14, -36]
			}],
			clusterIconContentLayout: ymaps.templateLayoutFactory.createClass(
				'<div style="font-size: 20px;font-weight:700; line-height: 28px; color: #FFFFFF; text-align: center">{{ properties.geoObjects.length }}</div>'),
		});
		// Добавляем кластер на карту.
		myMap.geoObjects.add(cluster);

	}

	// Создаем список
	function createList (item, cluster, list) {
		// Создаем единицу списка
		var listItem 	= 	$('<a href="#" class="where-select__item" data-city="' + item.city + '" data-id="' + item.id + '">\
								<div class="where-select__inner">\
									<div class="where-select__img"><img src="' + item.img + '" alt=""></div>\
									<div class="where-select__info">\
									  	<div class="where-select__title"><span>' + item.city + ', ' + item.address + '</span></div>\
									  	<div class="where-select__name">'+ item.name +'</div>\
									  	<div class="where-select__phone">' + item.phone + '</div>\
									  	<div class="where-select__phone">' + item.phone2 + '</div>\
									  	<div class="where-select__site">'+ item.site +'</div>\
								  	</div>\
								</div>\
						  	</a>'
		),
		

		//Вид иконок для меток
		defaultOptions = {
			iconLayout: 'default#image',
			iconImageHref: "img/content/m-label.png",
			iconImageSize: [28,36],
            iconImageOffset: [-14, -36],
    		id: item.id,
		},
		
		// Создаем метку
		placemark = new ymaps.Placemark(item.center, {
		}, defaultOptions);

		// Добавляем метку в кластер
		cluster.add(placemark);
		// Добавляем города в список
		listItem.appendTo(list);

		// Вешаем обработчик на метку
		placemark.events.add('click', function (e) {
			console.log(item.id);

			$('.where-select__item').removeClass('active');
			$('[data-id='+item.id+']').addClass('active');

			var activeEl = $('[data-id='+item.id+']');

			$('html, body').animate({
		        scrollTop: parseInt(activeEl.offset().top)
		    }, 1000);

		});
	}


	// Закрываем все балуны при клике по карте
	myMap.events.add('click', function() {
		myMap.balloon.close();
	});
	// Запрещаем зум скроллом
	myMap.controls.add(new ymaps.control.ZoomControl({options: { position: { right: 10, top: 50 }}}));
    myMap.behaviors.disable('scrollZoom');

    //Показать все метки на карте
    myMap.setBounds(myMap.geoObjects.getBounds());

	// Запрещаем перетаскивание карты на телефоне(перетаскивание остается двумя пальцами)
	if ($(window).width() <= 767)
		myMap.behaviors.disable('drag');

}

