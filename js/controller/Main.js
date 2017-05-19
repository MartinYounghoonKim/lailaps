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
        'navigation'
    ], function(navigation){
        var element = document.querySelectorAll("[data-parellax-ui]");
        var i = 0;
        for(; i<element.length; i++){
            new navigation({
                "wrap" : element[i]
            }).init();
        }
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
        'productBannerAnimation'
    ], function(productBannerAnimation){
        new productBannerAnimation.init({
            "wrap" : "[data-ui-banner-animation='wrap']",
            "child" : "> li"
        });
    });
});
