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
        ,'inputFunction'
	],function($, inputFunction){
        var element = $("[data-text-module]");
        for(var i=0; i<element.size(); i++){
            new inputFunction({
                "textArea" : element[i]
            }).bindEvents();
        }
    });
});
