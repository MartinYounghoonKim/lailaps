/*
*********************************************************************************
    slide 작성
    작성일 : 2017.04.24
    작성자 : 김영훈
    내용 : 공통 tab 기능
*********************************************************************************
*/
define([],function () {
		var tab = function(options){
			this.wrap=$(options.wrap);
			this.btnWrap = $(options.btnWrap, this.wrap);
			this.btnList= $(options.btnList, this.btnWrap);
			this.btn= $(options.btn, this.btnList);
			this.tabList = $(options.tabList, this.wrap);
			this.oldTemp=0;	//default active tab number
			this.newTemp;

		}
		tab.prototype={
			bindEvents:function(){
				var that = this;
				this.btn.on("click", function(){
					that.activeEvent($(this));
				})
			},
			activeEvent:function(me){
				this.newTemp = me.parent().index();
				this.btnList.eq(this.oldTemp).removeClass("on");
				this.btnList.eq(this.newTemp).addClass("on");
				this.tabList.eq(this.oldTemp).removeClass("on");
				this.tabList.eq(this.newTemp).addClass("on");
				this.oldTemp = this.newTemp;
			}
		}
		return tab;
    }
);
