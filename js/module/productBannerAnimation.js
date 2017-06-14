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
	var bannerAnimation = (function(){
		function init(elements){
			var wrap = $(setSelector(elements).wrap);
			var child = $(setSelector(elements).child,wrap);
			var oldTemp;
			var newTemp=responsive.getDeviceSize();
			var originWidth = getOriginWidth(child);

			$(window).resize( function(){
				newTemp = responsive.getDeviceSize();
				if(oldTemp!==newTemp){
					oldTemp = newTemp;
					divideDeviceEvent(elements, originWidth, oldTemp);
				}
			});
			divideDeviceEvent(elements, originWidth, newTemp);
		}

		function setSelector(selector){
			return{
				"wrap" : selector.wrap,
				"child" : selector.child
			}
		}

		function divideDeviceEvent(selector, originWidth, device){
			if(device == "PC"){
				bindPcEvents(selector,originWidth);
			} else {
				unbindEvents(selector);
			}
		}

		function getOriginWidth(target){
			var arr = [];
			target.each( function(){
				arr.push($(this).data("banner-width"));
			});
			return arr;
		}

		function bindPcEvents(selector,originWidth){
			var wrap = $(setSelector(selector).wrap);
			var child = $(setSelector(selector).child,wrap);
			child.each(function(idx){
				$(this).css("width",originWidth[idx]);
			})
			child.on("mouseenter",function(){
				child.stop().animate({
					"width" : 18.4 + "%"
				})
				$(this).stop().animate({
					"width" : 26 + "%"
				})
			});

			wrap.on("mouseleave",function(){
				child.each( function(idx){
					$(this).stop().animate({
						"width" : originWidth[idx] + "px"
					})
				})
			})
		}

		function unbindEvents(selector){
			var wrap = $(setSelector(selector).wrap);
			var child = $(setSelector(selector).child,wrap);

			wrap.unbind("mouseleave");
			child.unbind("mouseenter").css("width","100%");
		}
		return{
			init : init
		}

	})();
	return bannerAnimation;

});
