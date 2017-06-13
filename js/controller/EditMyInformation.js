define([],function () {
    require([
        'gnb'
	],function(gnb){
        gnb().init({
            "menuActiveBtn" : ".gnb-active-btn",
            "wrapper" : "#header .wrap",
            "menuCloseBtn" : ".gnb-exit_btn",
            "gnbWrap" : "#gnb > ul",
            "gnbOneDeptBtn" : "[data-gnb-hover]"
        }).divideDeviceEvent();
    });
    require([
        'showAnimation'
    ], function(showAnimation){
        new showAnimation({
            "wrap" : "[data-ui-show-animation='wrap']",
            "child" : "> div"
        }).init();
    });
    require([
        'jquery'
        ,'tab'
    ], function($,tab){
        var element = $("[data-module-tab='wrap']");
        for(var i=0; i<element.size();i++){
            new tab({
				"wrap":element[i],
				"btnWrap":"[data-module-tabBtn='wrap']",
				"btnList":">li",
				"btn":">button",
				"tabList":"[data-module-tab='contentsList']"
			}).bindEvents();
        }
    });
    require([
        'getPostApi'
    ], function(getPostApi){
        getPostApi.init({
            "wrapper" : "postApi",
            "contents" : ".layer-pop__inner-wrap__paragraph"
        });
    });
    require([
        'layerInit'
    ], function(layerInit){
        layerInit.init({
            "openButton" : "[data-open-layer]",
            "closeButton" : "[data-close-layer]"
        });
    })
});
