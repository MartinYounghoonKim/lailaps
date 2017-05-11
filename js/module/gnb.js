define([
	'jquery'
	,'responsive'
],function ($,responsive) {

	var mobileGnbFunc = function(){

		function init(options){
			var activeBtn = $(options.menuActiveBtn);
			var wrapper = $(options.wrapper);
			var closeBtn = $(options.menuCloseBtn);
			var gnb = $(options.gnbWrap);
			var gnbOneDeptBtn = $(options.gnbOneDeptBtn);
			var oldTemp;
			var newTemp=responsive.getDeviceSize();

			$(window).resize( function(){
				newTemp = responsive.getDeviceSize();
				if(oldTemp!==newTemp){
					divideDeviceEvent();
					oldTemp = newTemp;
				}
			});

			var divideDeviceEvent = function(){
				if(newTemp == "PC"){
					unbindEvents({
						activeBtn : activeBtn,
						wrapper : wrapper,
						closeBtn : closeBtn,
						gnb : gnb,
						gnbOneDeptBtn : gnbOneDeptBtn
					});
				} else {
					bindEvents({
						activeBtn : activeBtn,
						wrapper : wrapper,
						closeBtn : closeBtn,
						gnb : gnb,
						gnbOneDeptBtn : gnbOneDeptBtn
					});
				}
			}

			return {
				divideDeviceEvent : divideDeviceEvent
			}
		}

		function bindEvents(selector){
			selector.gnb.find(".dept2").hide();
			selector.activeBtn.unbind("click").on("click", function(){
				activeGnbMenu(selector.wrapper);
			});
			selector.closeBtn.unbind("click").on("click",function(){
				closeGnbMenu((selector.wrapper));
			})
			selector.gnbOneDeptBtn.unbind("click").on("click", function(){
				gnbMenuToggle( $(this), selector.gnb );
			})
		}

		function unbindEvents(selector){
			selector.activeBtn.unbind("click");
			selector.closeBtn.unbind("click");
			selector.gnbOneDeptBtn.unbind("click");
			selector.wrapper.show();
			selector.gnb.find(".dept2").show();
		}

		function activeGnbMenu(wrapper){
			wrapper.show();
		}

		function closeGnbMenu(wrapper){
			wrapper.hide();
		}

		function gnbMenuToggle(me, gnb){
			gnb.find(".dept2").stop().slideUp();
			if(me.next().is(":visible")){
				me.next().stop().slideUp();
			} else {
				me.next().stop().slideDown();
			}
		}

		return {
			init : init
		}
	};


	return mobileGnbFunc;

});
