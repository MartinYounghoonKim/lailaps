define([
    'jquery'
], function($){
    var inputValidator = function(options){
        this.wrapper = $(options.wrapper);
    }
    inputValidator.prototype = {
        bindEvents:function(){
            var that = this;
            this.wrapper.on("focus",function(){
                that.getCountVal($(this));
            })
            /*this.wrapper[0].onkeyup = function(e){
                console.log(e.keyCode)
            }*/
        },
        getCountVal:function(me){
            var textType = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
            var countText = setInterval(function(){
                console.log(11);
                if(me.val().length >0){
                    clearInterval(countText);
                }
            },100)
        },
    }
    return inputValidator;
})
