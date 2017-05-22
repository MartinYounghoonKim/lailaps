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
		var fieldValue = [
			{"Authorization" : "850dfe67287dc1dff9fae137ec9341cc"},
			{"contentType": "application/json; charset=utf-8"}
		];
		RepairListData.init({
			"url" : "repairs",
			"dataType" : "json",
			"type":"get",
			"fieldValue" : fieldValue
		});
	});
});
