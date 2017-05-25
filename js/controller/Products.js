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
        'productBannerAnimation'
    ], function(productBannerAnimation){
        new productBannerAnimation.init({
            "wrap" : "[data-ui-banner-animation='wrap']",
            "child" : "> li"
        });
    });
    require([
        'jquery'
        ,'productParellaxTab'
    ], function($,productParellaxTab){
        productParellaxTab.init({
            "wrapper" : ".products__tab",
            "tabWrap" : ">ul",
            "tabList" : ">li",
            "targetWrap" : ".products-list__tab",
            "targetList" : ">ul > li"
        });
    });
});
