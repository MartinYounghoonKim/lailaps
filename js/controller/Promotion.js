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
        'accodian'
    ], function(accodian){
        new accodian({
            "wrap" : "[data-ui-accodian='wrap']",
            "btn" : ".promotion_wrap",
            "btnBox" : "> .promotion_box",
            "contents":".promotion_contents"
        }).bindEvents();
    });
});
