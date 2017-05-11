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
			mobileGnbFunc.checkDeviceSize(DEVICE);
		}
	});

	function checkDeviceSize(device){
		console.log(device)
		if(device !== "PC"){
			//mobileGnbFunc();
		}
	}
	
	var mobileGnbFunc = function (){
		function setSelector(selector){
			return {
				"menuActiveBtn" : $(selector.menuActiveBtn)
			}
		}

		function init(options){
			var dom = setSelector(options);
			activeGnbMenu(dom.menuActiveBtn);
		}
		function activeGnbMenu(btn){
			btn.click( function(){

			});
		}

		return {
			checkDeviceSize :checkDeviceSize,
			init : init
		}
	};
	return mobileGnbFunc;

});
