/*
*********************************************************************************
    slide 작성
    작성일 : 2017.05.30
    작성자 : 김영훈
    내용 : 메인 navigation 기능
*********************************************************************************
*/
define([
	'jquery'
],function ($) {
	var navigation = (function(){
		function init(options){
			var wrapper = setSelector(options).wrapper;
			var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
			var startPoint = getOffSetTop(options);
			var currentPoint =getCurrentPosition(startPoint, scrollTop);

			$(document).scroll( function(){
				scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
				currentPoint=getCurrentPosition(startPoint, scrollTop);
				navigationAction(options, currentPoint);
			});
			navigationAction(options, currentPoint);
			bindEvents(options);
		}

		function setSelector(selector){
			return {
				"wrapper" : $(selector.wrapper),
				"contents" : $(selector.contents),
				"tabNavigation" :$(selector.tabNavigation)
			}
		}

		function bindEvents(selector){
			var navigationWrapper = setSelector(selector).tabNavigation;
			var navigationButton = navigationWrapper.find("a");
			navigationButton.on("click", function(evt){
				evt.preventDefault();
				scrollPosition($(this));
			})
		}

		function getOffSetTop(selector){
			var contents = setSelector(selector).contents;
			var arr = [];
			contents.each( function(idx){
				arr.push($(this).offset().top)
			})
			return arr;
		}

		function getCurrentPosition(startPoint, scrollY){
			var idx=0;
			var i =0;
			var limit = 100;
			for(;i<startPoint.length;i++){
				if(startPoint[i]-scrollY<=limit){
					idx = i;
				}
			}
			return idx;
		}

		function navigationAction(selector, point){
			var tabNavigation = setSelector(selector).tabNavigation;
			var tabList = setSelector(selector).tabNavigation.children("li");
			var limit = tabList.size()-1;

			if(point > limit){
				point = limit;
			}
			tabList.removeClass("on");
			tabList.eq(point).addClass("on");
		}

		function scrollPosition(me){
			var getId = me.attr("href");
			var position = $(getId).offset().top;
			$('body, html').animate({
				scrollTop : position
			})

		}

		return{
			init :init
		}
	})();
	return navigation;

});
