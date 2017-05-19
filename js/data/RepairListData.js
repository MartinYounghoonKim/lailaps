define([
	'jquery'
	,'handlebars'
	,'getData'
],function ($, Handlebars, getData) {
	var bindData = (function(){
		function init(dataInfo){
			var wrapper = $("[data-bind-target='wrap']");
			var repairListData = $("#repairListData");
			var data = getData().setDataType(dataInfo.url, dataInfo.dataType,dataInfo.type, dataInfo.fieldValue);

			bindTableData(wrapper, repairListData, data);
		}

		function bindTableData(wrapper, sample, data){
			console.log(data)
			var dummy = sample.html();
			var template = Handlebars.compile(dummy);
			var item = template(data);
			wrapper.append(item);
			
		}

		return{
			init : init
		}
	})();
	return bindData;

});
