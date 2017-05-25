/*
*********************************************************************************
    slide 작성
    작성일 : 2017.05.24
    작성자 : 정진배
    내용 : 프로덕트 패럴렉스 기능의 탭
*********************************************************************************
*/
define([
	'jquery'
],function ($) {
	var productParellaxTab = {
		init:function(options){
			this.wrapper = $(options.wrapper);
			this.tabWrap = $(options.tabWrap, this.wrapper);
			this.tabList = $(options.tabList, this.tabWrap);
			this.targetWrap = $(options.targetWrap);
			this.targetList = $(options.targetList, this.targetWrap);
			this.location = this.targetWrap.offset().top;

			this.bindEvents();
		},
		bindEvents:function(me){
			var that = this;
			var idx;
			this.tabList.on("click", function(){
				idx = $(this).index();
				that.getContentsIndex(idx);
				that.moveContents(idx);
			});
		},
		moveContents:function(){
			$("body").animate({
				scrollTop:this.location
			},1000);
			//움직이는 부분
		},
		getContentsIndex:function(idx){
			var that = this;
			//index 값을 받아오는거;
			that.setContentsIndex(idx);
			//받아온 id 값을 setContentsTemp으로 던져주면서 실행
		},
		setContentsIndex:function(idx){
			this.targetWrap.find("li").removeClass("on");
			this.targetList.eq(idx).addClass("on");
			//getContentsTemp 에서 유니크 id
			//tab에 클래스 on 기능을 실행
		}

	}
	return productParellaxTab;
});
/*
var func = function(){

}
function func(){

}
func();
(function(){

}());

var func = {
	func1:funcion(){

	},
	func2:funcion(){

	},
	func3:funcion(){

	}
}
func.func1();

function (func(){
	function init(){
	}
	function func1(){
	}
	return {
		init;
	}
})();
func.init()
*/
