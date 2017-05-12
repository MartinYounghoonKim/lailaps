/*
*********************************************************************************
    slide 작성
    작성일 : 2017.04.24
    작성자 : 이영주
    내용 : 메인 navigation 기능
*********************************************************************************
*/
define([
	'jquery'
	,'wheel'
	,'jqueryEasing'
],function ($) {
	var showAnimation = function(element){
		this.wrap = $(element.wrap);
		this.child = $(element.child, this.wrap);
		this.direction = this.wrap.data("ui-show-animation-direction");
		this.screenWidth = Math.max(document.body.clientWidth, document.documentElement.clientWidth);
		this.wrap.play=false;
		this.arr = [];
		var that =this;
		this.scrollY =  document.body.scrollTop || document.documentElement.scrollTop;
		this.play = true;

		$(document).scroll( function(){
			that.scrollY =  document.body.scrollTop || document.documentElement.scrollTop;
			that.chkPoint();
		})
	}
	showAnimation.prototype={
		init:function(){
			var that = this;
			this.child.each( function(){
				that.arr.push(parseInt($(this).css(that.direction)));	//초기 left 값 arr에 대입
				$(this)[0].style[that.direction] = -($(this).width() + that.wrap.offset().left) + "px"
			})
			this.chkPoint();
		},
		chkPoint: function(){
			var limit = 500;
			if( this.wrap.offset().top - this.scrollY <= limit){
				if(this.play == true){
					this.showFunc();
					this.play= false;
				} else {
					return false;
				}
			}
		},
		showFunc: function(){
			var that =this;
			var cnt = 0;
			var limit = this.child.size()-1;
			var duration = 200;

			var interval = setInterval( function(){
				that.child.eq(cnt).animate(
					that.renderingDirection(that.direction, cnt),
				{
					"duration" : 1000,
					"easing" : "easeOutBack"
				})
				cnt >= limit ? clearInterval(interval) : cnt++;
			}, duration)
		},
		renderingDirection:function(direct,cnt){
			if(direct == "left"){
				return {
					"left" : this.arr[cnt] + "px",
					"opacity" : 1
				}
			} else {
				return {
					"right" : this.arr[cnt] + "px",
					"opacity" : 1
				}
			}
		}

	}
	return showAnimation;

});
