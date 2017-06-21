/*
*********************************************************************************
    slide 작성
    작성일 : 2017.05.29
    작성자 : 김영훈
    내용 : 게시판 하단의 paging 처리에 대한 기능
*********************************************************************************
*/
define([
	'jquery'
],function ($) {
	var pagination = (function(){
		function init(){
			var currentCnt = 1;
			var pagingButton = $("[data-pagination]");
			pagingButton .each( function(){
				$(this).attr("data-pagination", $(this).html());
				$(this).click( function(){
					currentCnt = $(this).attr("data-pagination");
				})
			});
			return currentCnt;
		}
		return {
			init : init
		}
	})();
	return pagination;
});
