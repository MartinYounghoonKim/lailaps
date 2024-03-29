/*
********************************************************************************
    layerPop 작성
    작성일 : 2017.05.22
    작성자 : 김영훈
    내용 : 텍스트 영역 clear 버튼 관련 기능
********************************************************************************
*/

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
                if($(this).prop("readonly") === true){
                    return false;
                }
                that.getCountVal($(this));
            });
            this.textArea.unbind("keyup").on("keyup",function(e){
                if(e.keyCode == 8 || e.keyCode==46){
                    if($(this).val().length ==0){
                        console.log(11);
                        that.removeErasingBtn($(this).siblings(".clear-text-button"));
                        that.getCountVal($(this));
                    }
                }
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
            me.closest(".is-text-inner-wrap").addClass("have-erase-button");
            this.erasingText();
        },
        removeErasingBtn:function(me){
            me.closest(".is-text-inner-wrap").removeClass("have-erase-button");
            me.remove();
            this.start=true;
        },
        erasingText:function(){
            var that = this;
            $(".clear-text-button").on("click",function(){
                $(this).siblings("input").val("").focus();
                that.removeErasingBtn($(this));
            });
        }
    }
    return inputValidator;
})
