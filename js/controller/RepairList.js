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
    requirejs([
		'RepairListData'
	], function(RepairListData){
		RepairListData.init({
			"url" : "webRepairs",
			"dataType" : "json",
			"type":"get"
		});
	});
});
