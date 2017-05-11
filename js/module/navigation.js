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
],function ($,wheel) {
	var navigation = function(element){
		this.wrap = $(element.wrap);
		this.play= false;
	}
	navigation.prototype={
		init:function(){
			var that =this;
			var scrollY = Math.max( document.body.scrollTop, document.documentElement.scrollTop);
			var limit = 200;
			//console.log(this.wrap.offset().top)
			$(document).scroll( function(){
				scrollY = Math.max( document.body.scrollTop, document.documentElement.scrollTop);
				if(that.wrap.offset().top - scrollY <= limit ){
					this.play =true;
				}
			})
		}
	}
	return navigation;

});
