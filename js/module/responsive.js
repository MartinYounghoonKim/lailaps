/*
*********************************************************************************
    reponsive 작성
    작성일 : 2017.04.24
    작성자 : 김영훈
    내용 : 해상도별 기능 분기 처리를 위한 스크립트
*********************************************************************************
*/
define([
	'jquery'
	,'checkDevice'
],function ($, device) {
	var currentSize= "";
	var responsive ={
		init : function(){
			this.windowSize = Math.max( document.documentElement.clientWidth, window.innerWidth);
			this.resolution;
			this.oldSize;
			this.newSize;

			//start function
			this.callSize();
		},
		checkSize:function(){
			this.resolution = this.windowSize;
			if(this.resolution > device.TABLET_SIZE ){
				this.resolution = "PC";
			} else if ( (this.resolution <= device.TABLET_SIZE) && (this.resolution > device.MOBILE_SIZE) ) {
				this.resolution="Tablet";
			} else if ( this.resolution <= device.MOBILE_SIZE){
				this.resolution="Mobile";
			}

			return this.resolution;
		},
		callSize:function(){
			this.newSize = this.checkSize();
			if(this.newSize !== this.oldSize){
				this.oldSize = this.newSize;
				currentSize = this.oldSize;
				//Check Device size;
				console.log(":::: Device Size Check : " + currentSize + " ::::");
			}
			return currentSize;
		}
	}
	responsive.init();
	$(window).resize(function(){
		responsive.init();
	})
	return {
		getDeviceSize : function(){
			return currentSize;
		}
	}

});
