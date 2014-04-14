$(function() {
  
 countdownToMeatups();

});

var countdownToMeatups = function(){
	
	var meatupWest = new Date(2014, 04, 9);
	$('.west .count').countdown({until: meatupWest});

	var meatupEu = new Date(2014, 04, 17);
	$('.eu .count').countdown({until: meatupEu});
}