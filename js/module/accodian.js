/*
********************************************************************************
    reponsive 작성
    작성일 : 2017.04.26
    작성자 : 정진배 (수정 : 김영훈 2017-04-28)
    내용 : 프로모션페이지 아코디언 기능
********************************************************************************
*/
define([
	'jquery'
],function ($) {
	var accodian = function(element){
		this.wrap = $(element.wrap);
		this.btn = $(element.btn,this.wrap);
		this.contents = $(element.contents,this.wrap);
	}
	accodian.prototype={
		bindEvents:function(){
			var that = this;
			var oldTemp=0;
			var newTemp;
			this.contents.on("click",function(e){
				e.stopPropagation();
			})
			this.btn.on("click",function(e){
				newTemp = $(this).index();
				e.preventDefault();
				that.events(newTemp, oldTemp);
				oldTemp = newTemp;
			})
		},
		events:function(newTemp, oldTemp){
			var that =this;
			if(newTemp !== oldTemp){	//다른 버튼을 클릭할 경우
				if(oldTemp !== undefined){
					close();
				}
				open();
			} else {	//같은 버튼을 클릭할 경우
				if(this.btn.eq(oldTemp).hasClass("on")){
					close();
				} else{
					open();
				}
			}
			function open(){
				that.btn.eq(newTemp).addClass("on");
				that.btn.eq(newTemp).find(".promotion_contents").stop().slideDown(1000);
			}
			function close(){
				that.btn.eq(oldTemp).removeClass("on");
				that.btn.eq(oldTemp).find(".promotion_contents").stop().slideUp(1000);
			}
		}
	}
	return accodian;
});
