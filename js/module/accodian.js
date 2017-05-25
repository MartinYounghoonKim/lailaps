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
		this.btnBox = $(element.btnBox,this.btn);
	}
	accodian.prototype={
		bindEvents:function(){
			var that = this;
			var oldTemp=0;
			var newTemp;
			var slideTemp;
			this.contents.on("click",function(e){
				e.stopPropagation();
			})
			this.btn.on("click",function(e){
				newTemp = $(this).index();
				slideTemp = $(this).children(".contents_wrap").children();
				e.preventDefault();
				that.events(newTemp, oldTemp, slideTemp);
				oldTemp = newTemp;
			})
		},
		events:function(newTemp, oldTemp, slideTemp){
			var that =this;
			if(newTemp !== oldTemp){	//다른 버튼을 클릭할 경우
				if(oldTemp !== undefined){
					close(slideTemp);
				}
				open(slideTemp);
			} else {	//같은 버튼을 클릭할 경우
				if(this.btn.eq(oldTemp).hasClass("on")){
					close(slideTemp);
				} else{
					open(slideTemp);
				}
			}
			function open(slideTemp){
				height = slideTemp.outerHeight();
				that.btn.removeClass("on");
				that.btnBox.next().stop().animate({
					"height" : 0
				},{
					duration : 1000
				})
				that.btn.eq(newTemp).addClass("on");
				that.btn.eq(newTemp).find(".contents_wrap").stop().animate({
					"height" : height+"px"
				},{
					duration : 1000
				});
			}
			function close(slideTemp){
				height = slideTemp.outerHeight();
				that.btn.eq(oldTemp).removeClass("on");
				that.btn.eq(newTemp).find(".contents_wrap").stop().animate({
					"height" : 0
				},{
					duration : 1000
				});
			}
		}
	}
	return accodian;
});
