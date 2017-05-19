/*
*********************************************************************************
    slide 작성
    작성일 : 2017.05.12
    작성자 : 김영훈
    내용 : 패럴렉스 기능의 탭
*********************************************************************************
*/
define([
	'jquery'
	,'wheel'
],function ($,wheel) {
	var parellaxTab = function(){
		function init(options){
			var wrapper = $(setSelector(options).wrapper);
			var tabListWrap = $(options.tabListWrap, wrapper);
			var tabList = $(options.tabList, tabListWrap);
			var tabButton = $(options.tabButton, tabList);
			var contentsWrap = $(options.contentsWrap);
			var contentsCell = $(options.contentsCell, contentsWrap);
			var bodyScrollY = document.body.scrollTop || document.documentElement.scrollTop;
			var contentsY = wrapper.offset().top;
			var diff = contentsY-bodyScrollY;
			var tabIndex = 0;
			var flag;
			$(window).scroll( function(){
				bodyScrollY = document.body.scrollTop || document.documentElement.scrollTop;
				diff = contentsY-bodyScrollY;
				tabIndex = 1 + currentPosition(contentsWrap,contentsCell,bodyScrollY).getIndexNum();

				bannerPosition(wrapper, diff);
				activeTabList(tabListWrap, tabList, tabIndex, flag, );
				flag = tabIndex;
			});
			tabIndex = 1 + currentPosition(contentsWrap,contentsCell,bodyScrollY).getIndexNum();

			bannerPosition(wrapper, diff);
			activeTabList(tabListWrap, tabList, tabIndex, flag);
			bindEvents({
				tabButton : tabButton
			})
		}

		function setSelector(selecotr){
			return{
				"wrapper" : selecotr.wrapper,
				"tabListWrap" : selecotr.tabListWrap,
				"tabList" : selecotr.tabList,
				"tabButton" : selecotr.tabButton,
				"contentsWrap" : selecotr.contentsWrap,
				"contentsCell" : selecotr.contentsCell
			}
		}

		function bannerPosition(target, diff){
			if(diff <= 0 ){
				target.addClass("is-fix");
			} else {
				target.removeClass("is-fix");
			}
		}

		function bindEvents(selector){
			selector.tabButton.on("click", function(e){
				e.preventDefault();
				moveTarget($(this))
			})
		}

		function activeTabList(tabListWrap, tabList, idx, flag){
			if(idx == flag){
				return false;
			}
			tabListWrap.find("li").removeClass("on");
			tabList.eq(idx).addClass("on");

		}

		function moveTarget(me){
			var location = me.attr("href");
			var scollY = $(location).offset().top - 100;

			$('body, html').stop().animate({
				scrollTop : scollY
			})
		}

		function currentPosition(contentsWrap,contentsCell,bodyScrollY){
			return {
				getIndexNum : function(){
					var cnt;
					contentsCell.each( function(idx){
						if(($(this).height()+$(this).offset().top) - bodyScrollY <=100 ){
							cnt = idx;
						}
					});
					if(cnt ==undefined){
						cnt = -1;
					}
					return cnt;
				}
			}
		}
		return {
			init : init
		}
	}

	return parellaxTab;
});
