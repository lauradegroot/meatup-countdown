$(function() {
  
 countdownToMeatups();

});

var countdownToMeatups = function(){
	
	var meatupEast = new Date("2014-04-10T22:00:00");
	$('.east .count').countdown({
		until: meatupEast,
		alwaysExpire: true,
		expiryText:'<img src="http://i.imgur.com/i2yIDSk.gif"/>'});
	
	var meatupWest = new Date(2014, 04, 9);
	$('.west .count').countdown({until: meatupWest});

	var meatupEu = new Date(2014, 04, 17);
	$('.eu .count').countdown({until: meatupEu});
}