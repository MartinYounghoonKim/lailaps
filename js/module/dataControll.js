define([
	'handlebars'
	,'getData'
],function (handlebars,getData) {
		var fieldValue = [
			{"Authorization" : "850dfe67287dc1dff9fae137ec9341cc"},
			{"contentType": "application/json; charset=utf-8"}
		];
		getData().setDataType("repairs", "json", "get", fieldValue)
});
