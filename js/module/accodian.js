/*
********************************************************************************
    reponsive 작성
    작성일 : 2017.04.26
    작성자 : 정진배
    내용 : 프로모션페이지 아코디언 기능
********************************************************************************
*/
define([
	'jquery'
],function ($) {
	$(function(){
	    var promotionBtn = $(".promotion_box > a");
	    var promotionCon = $(".promotion_contents");
	    var promotionArrow = $(".arrow");

	    promotionBtn.click(function(e){
	        e.preventDefault();
	        if($(this).parent().hasClass("on")){
	            $(this).parent().removeClass("on");
	            $(this).parent().next().removeClass("on");
	            $(this).parent().next().slideUp("2000");
	            promotionArrow.attr("src", "../images/arrow/arrow02.png")
	        } else {
	            promotionBtn.parent().next().slideUp();
	            promotionBtn.parent().removeClass("on");
	            promotionArrow.attr("src", "../images/arrow/arrow02.png")
	            $(this).parent().addClass("on");
	            $(this).parent().next().slideDown("50");
	            $(this).find(".arrow").attr("src", "../images/arrow/arrow02_on.png")
	        }
	    })
	})
	return Rolling_transition;
});
