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
        ,'parellaxTab'
    ], function($,parellaxTab){
        new parellaxTab().init({
            "wrapper" : "[data-parellax-fix-tab='wrap']",
            "tabListWrap" : ">ul",
            "tabList" : ">li",
            "tabButton" : "a",
            "contentsWrap" : "[data-parellax-contents='wrap']",
            "contentsCell" : ">div"
        })
    });
});
