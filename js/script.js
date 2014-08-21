$(function() {
  
 countdownToMeatups();

});

var countdownToMeatups = function(){
	
	var meatupEast = new Date(2014, 9, 3);
	$('.east .count').countdown({until: meatupEast});

	var meatupWest = new Date(2014, 9, 18);
	$('.west .count').countdown({until: meatupWest});
}