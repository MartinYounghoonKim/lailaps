define([],function () {
    require([
        'gnb'
	],function(gnb){

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
});
