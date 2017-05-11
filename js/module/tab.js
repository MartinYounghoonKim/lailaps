define([],function () {
		var tab = function(options){
			this.wrap=$(options.wrap);
			this.btnWrap = $(options.btnWrap, this.wrap);
			this.btnList= $(options.btnList, this.btnWrap);
			this.btn= $(options.btn, this.btnList);
			this.tabList = $(options.tabList, this.wrap);
			console.log(this.tabList.size())
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
