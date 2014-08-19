$(function() {
  
 countdownToMeatups();

});

var countdownToMeatups = function(){
	
	var meatupWest = new Date(2014, 9, 2);
	$('.east .count').countdown({until: meatupWest});

	var meatupEu = new Date(2014, 9, 18);
	$('.west .count').countdown({until: meatupEu});
}