(function($){
	$(document).ready(function(){
		// Set the time at which the countdown expires.
		// var untilDate new Date(Year, Month - 1, Day)
		//-----------------------------------------------
		var untilDate = new Date(2016, 11 - 1, 30);

		$(".countdown").countdown({
			until: untilDate, 
			format: 'dHMS',
			padZeroes: true
		});

		$('#embreve').countdown($.countdown.regionalOptions['br']);


	}); // End document ready

})(this.jQuery);