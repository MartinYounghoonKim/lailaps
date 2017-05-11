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
        'accodian'
    ], function(accodian){
        new accodian({
            "wrap" : "[data-ui-accodian='wrap']",
            "btn" : ".promotion_wrap",
            "contents":".promotion_contents"
        }).bindEvents();
    });
});
