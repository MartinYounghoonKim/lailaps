define([],function () {
    require([
        'gnb'
	],function(gnb){
        // TODO: GNB 기능 해상도 (PC와 모바일) 에 맞춰 기능 분리하기
        gnb().init({
            "menuActiveBtn" : ".gnb-active-btn"
        });
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
    // TODO: PC와 Mobile의 기능 분리하기
    require([
        'productBannerAnimation'
    ], function(productBannerAnimation){
        new productBannerAnimation({
            "wrap" : "[data-ui-banner-animation='wrap']",
            "child" : "> li"
        })
    });
});
