/*
********************************************************************************
    getData 작성
    작성일 : 2017.05.19
    작성자 : 김영훈
    내용 : 데이터 핸들링 constant 설정
********************************************************************************
*/
define([
    'jquery'
],function($){
    var getData = function(){
		function setDataType(url,datatype,type,send){
			var result;
			$.ajax({
				url : "http://mw.lailaps.co.kr/v1/" + url,
				dataType : datatype,
				async: false,
				type : type,
				beforeSend : function(xhr){
					for(var i=0; i < send.length; i++ ){
						for(var k in send[i]){
							xhr.setRequestHeader(k, send[i][k]);
						}
					}
				},
				success : function(data){
				   result = data;
				},
				error : function(){
					result = "Data load fail"
				}
			})
			return result;
		};
		return {
			setDataType : setDataType
		}
    };
    return getData;
});
