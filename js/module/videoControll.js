define([
    'jquery'
],function ($) {
    var videoControll=(function(){
        function init(options){
            bindEvents(options);
        }

        function setSelector(selector){
            return{
                "wrapper" : $(selector.wrapper),
                "videoContents" : $(selector.videoContents, selector.wrapper),
                "controllBtn" : $(selector.controllBtn, selector.wrapper)
            }
        }

        function bindEvents(options){
            var controllBtn = setSelector(options).controllBtn;
            controllBtn.on("click",function(){
                controllVideo(options, $(this))
            });
        }

        function controllVideo(options, me){
            var videoContents = setSelector(options).videoContents.get(0);
            if(me.hasClass("pause")){
                me.removeClass("pause");
                videoContents.play();
            } else {
                me.addClass("pause");
                videoContents.pause();
            }

        }
        return{
            init:init
        }
    })();
    return videoControll;
});
