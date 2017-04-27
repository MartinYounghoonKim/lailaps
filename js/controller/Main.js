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
});
