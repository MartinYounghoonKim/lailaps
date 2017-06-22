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
        'jquery'
        ,'slide'
	],function($, slide){
        slide($("[data-ui-name='visual_rolling']"));
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
        'showAnimation'
    ], function(showAnimation){
        new showAnimation({
            "wrap" : "[data-ui-show-animation='wrap']",
            "child" : "> img"
        }).init();
    });
    require([
        'navigation'
    ], function(navigation){
        new navigation.init({
            "wrapper" : "[data-parellax-ui='wrapper']",
            "contents" : "[data-parellax-ui='contents']",
            "tabNavigation" : "[data-parellax-ui='navigation']"
        });
    });
});
