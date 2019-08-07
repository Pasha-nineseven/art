$(document).ready(function() {
	$("body").on("click", ".js-alphabet-filter__letter", function(e){
		e.preventDefault();
		
		var scrollName = $(this).attr('data-scroll'),
		    scrollElem = $(".catalogs-item[data-item='" + scrollName +"']")[0];
			scrollT = scrollElem.getBoundingClientRect().top;


			$('html, body').animate({
			  	scrollTop: scrollT
			}, 500);

	});
});