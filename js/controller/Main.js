define([],function () {
    require([
        'gnb'
	],function(gnb){

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
});
