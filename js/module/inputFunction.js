define([
    'jquery'
], function($){
    var inputValidator = function(options){
        this.textArea = $(options.textArea);
        this.wrapper = this.textArea.parent();
        this.start=true;
    }
    inputValidator.prototype = {
        bindEvents:function(){
            var that = this;
            this.textArea.on("focus",function(){
                that.getCountVal($(this));
                that.findTextFocus("on");
            });
            this.textArea.on("blur",function(){
                that.findTextFocus("off");
            });
            this.textArea.on("keyup",function(e){
                if(e.keyCode == 8 || e.keyCode==46){
                    if($(this).val().length ==0){
                        that.removeErasingBtn();
                        that.getCountVal($(this));
                    }
                }
            });
            this.wrapper.on("click",function(e){
                e.stopPropagation();
            });
        },
        getCountVal:function(me){
            var that = this;
            var countText = setInterval(function(){
                if(me.val().length >0){
                    clearInterval(countText);
                    if(that.start==true){
                        that.setErasingeBtn(me);
                        that.start = false;
                    }
                } else {
                    that.start=true;
                }
            },300)
        },
        setErasingeBtn:function(me){
            var str = document.createElement("button");
                str.setAttribute("type","button");
                str.setAttribute("class","clear-text-button");
            me.parent().append(str);
            this.erasingText();
        },
        removeErasingBtn:function(){
            this.wrapper.children(".clear-text-button").remove();
            this.start=true;
        },
        erasingText:function(){
            var that = this;
            $(".clear-text-button").on("click",function(){
                that.textArea.val("").focus();
                that.removeErasingBtn();
            });
            $(".clear-text-button").on("focus",function(){
                that.findTextFocus("on");
            });
        },
        findTextFocus:function(temp){
            switch(temp){
                case "on" : this.wrapper.attr("data-input-focus","");
                break;
                case "off" : this.wrapper.removeAttr("data-input-focus","");
                break;
            }
            if(this.wrapper.attr("data-input-focus")==undefined){
                this.removeErasingBtn();
            }
        }
    }
    return inputValidator;
})
