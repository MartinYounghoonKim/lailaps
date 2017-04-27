define([
	'jquery'
	,'responsive'
],function ($, responsive) {
	var DEVICE_TEMP = responsive.getDeviceSize();
	var DEVICE = DEVICE_TEMP;
	$(window).resize( function(){
		DEVICE_TEMP = responsive.getDeviceSize();
		if(DEVICE !==DEVICE_TEMP ){
			DEVICE = DEVICE_TEMP;
			//실행될 기능
		}
	})


});
