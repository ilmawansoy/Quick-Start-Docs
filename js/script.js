$(document).ready(function() {
	$(".bs-sidebar a").on('click', function(event) {

	    if (this.hash !== "") {
	    event.preventDefault();

	    var hash = this.hash;

	    $('html, body').animate({
	    	scrollTop: $(hash).offset().top - 5
	    }, 700, function(){
	   
		    	window.location.hash = hash;
		    });
    	}
    });

});