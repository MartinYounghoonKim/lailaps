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
    /*
    require([
        'getPostApi'
    ], function(getPostApi){
        getPostApi.init({
            "getApiButton" : "[data-post-api='getApiButton']"
        });
    });*/


    /*
    require([
        'postApi'
    ],function(daum){
        daum.postcode.load(function(){
            new daum.Postcode({
                oncomplete: function(data) {
                    // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                    // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                }
            }).embed();
        });
        daum.Postcode({
            oncomplete: function(data) {
                // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                // 예제를 참고하여 다양한 활용법을 확인해 보세요.
            }
        }).embed();
    })*/
    require([
        'layerInit'
    ], function(layerInit){
        layerInit.init({
            "openButton" : "[data-open-layer]"
        });
    })
});
