$(document).ready(function() {
	$("body").on("click", ".js-brands-in-sort__link", function(e){
		e.preventDefault();
		$(this).toggleClass('max-min');
		if ( $( this ).hasClass( "max-min" ) ) {
	        $( this ).text('Z-A (Я-А)');
	    } else $( this ).text('A-Z (А-Я)')
	});
});