$(document).ready(function() {
	$("body").on("click", ".js-read-more", function(e){
		e.preventDefault();
		$(this).parents('.reviews__item').find('.reviews-more').addClass('active');
	});

	$("body").on("click", ".js-reviews-more__close", function(e){
		e.preventDefault();
		$(this).parents('.reviews__item').find('.reviews-more').removeClass('active');
	});
});