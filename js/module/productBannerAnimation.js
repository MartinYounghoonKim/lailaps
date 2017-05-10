/*
*********************************************************************************
    slide 작성
    작성일 : 2017.04.28
    작성자 : 김영훈
    내용 : 메인 Product의 배너 애니메이션 효과
*********************************************************************************
*/
define([
	'jquery'
	,'jqueryEasing'
	,'responsive'
],function ($,easing, responsive) {
	// TODO: 해상도(PC와 모바일)에 맞춰 기능 분리하기
	var DEVICE_TEMP = responsive.getDeviceSize();
	var DEVICE = DEVICE_TEMP;
	$(window).resize( function(){
		DEVICE_TEMP = responsive.getDeviceSize();
		if(DEVICE !==DEVICE_TEMP ){
			DEVICE = DEVICE_TEMP;
			console.log(bannerAnimation)
		}
	});
	var bannerAnimation = function(element){
		this.wrap=$(element.wrap);
		this.child=$(element.child, this.wrap);
		this.arr = [];
	}
	bannerAnimation.prototype={
		init:function(){
			var that = this;
			this.child.each( function(){
				that.arr.push($(this).width());
			});
			this.hoverFunc();
		},
		hoverFunc:function(){
			var that =this;
			this.child.on("mouseenter",function(){
				that.child.stop().animate({
					"width" : 18.4 + "%"
				})
				$(this).stop().animate({
					"width" : 26 + "%"
				})
			})
			this.wrap.on("mouseleave",function(){
				that.child.each( function(idx){
					$(this).stop().animate({
						"width" : that.arr[idx] + "px"
					})
				})
			})

		}
	}
	return bannerAnimation;

});
