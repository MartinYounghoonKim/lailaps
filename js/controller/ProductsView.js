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
        'parellaxTab'
    ], function(parellaxTab){
        new parellaxTab().init({
            "wrapper" : "[data-parellax-fix-tab='wrap']",
            "tabListWrap" : ">ul",
            "tabList" : ">li",
            "tabButton" : "a",
            "contentsWrap" : "[data-parellax-contents='wrap']",
            "contentsCell" : ">div"
        })
    });
    require([
        'productSlide'
    ], function(productSlide){
        new productSlide.init({
            "wrapper" : "[data-slide='wrapper']",
            "viewWrapper" : ".products-view__contents__thumnail__view-section",
            "viewPrevBtn" : ".is-prev-btn",
            "viewNextBtn" : ".is-next-btn",
            "viewImgWrapper" : ".products-view__contents__thumnail__view-section__products-img",
            "viewImgList" : ".products-view__contents__thumnail__view-section__products-img > ul > li",
            "controllWrapper" : ".products-view__contents__thumnail__controll-section",
            "controllPrev" : ".is-prev-btn",
            "controllNext" : ".is-next-btn",
            "thumnailWrapper" : ".products-view__contents__thumnail__controll-section__thumnail-img > ul",
            "thumnailList" : ".products-view__contents__thumnail__controll-section__thumnail-img > ul > li",
        })
    });
    // require([
    //     'layerPop'
    // ], function(layerPop){
    //     layerPop.init({
    //         "wrapper" : "[data-layer-pop]",
    //         "openBtn" : "[data-open-layer]",
    //         "closeBtn" : "[data-close-layer]"
    //     });
    // });
    require([
        'productLayer'
    ], function(productLayer){
        productLayer({
            "wrapper" : "[data-layer-pop]",
            "openBtn" : "[data-open-layer]",
            "closeBtn" : "[data-close-layer]",
            "contentsDestination" : ".layer-pop__inner-wrap",
            "contents" : ".products-view__contents__thumnail__view-section__products-img > ul > li.on > img"
        });
    });
});
