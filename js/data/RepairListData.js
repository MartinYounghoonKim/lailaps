/*
********************************************************************************
    RepairListData �ۼ�
    �ۼ��� : 2017.05.19
    �ۼ��� : �迵��
    ���� : �������� ���� �� api �����͸� repair_list ȭ�鿡 �ѷ���
********************************************************************************
*/
define([
	'jquery'
	,'handlebars'
	,'getData'
],function ($, Handlebars, getData) {
	// TODO: 페이징 기능 처리
	var bindData = (function(){
		var pageCount = 1;
		var fieldValue = [
			{"Authorization" : "850dfe67287dc1dff9fae137ec9341cc"},
			{"contentType": "application/json; charset=utf-8"},
			{"page" : pageCount}
		];

		function init(dataInfo){
			var data = getData().setDataType(dataInfo.url, dataInfo.dataType,dataInfo.type, fieldValue );

			bindTableData(data);
			pagination(dataInfo)
		}

		function setSelector(){
			return {
				"wrapper" : $("[data-bind-target='wrap']"),
				"repairListData" : $("#repairListData"),
				"pageButton": $("[data-pagination]")
			}
		}

		function bindTableData(data){
			var wrapper = setSelector().wrapper;
			var sample = setSelector().repairListData;
			var dummy = sample.html();
			var template = Handlebars.compile(dummy);
			var item = template(data);

			wrapper.prepend(item);
		}

		function pagination(dataInfo){
			var pageButton = setSelector().pageButton;
			var cnt = 0;
			var data;

			pageButton .each(function(idx){
				$(this).attr("data-pagination", idx+pageCount );
			})
			pageButton .on("click",function(){
				pageButton.removeClass("on");
				$(this).addClass("on");
				pageCount = $(this).data("pagination");
				fieldValue = [
					{"Authorization" : "850dfe67287dc1dff9fae137ec9341cc"},
					{"contentType": "application/json; charset=utf-8"},
					{"page" : pageCount}
				];
				$(".table-contents__table-wrap").remove();
				data = getData().setDataType(dataInfo.url, dataInfo.dataType,dataInfo.type, fieldValue )
				bindTableData(data);
			});
		}
		return{
			init : init
		}
	})();
	return bindData;

});
