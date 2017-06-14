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
                hideControllButton(options)
            } else {
                me.addClass("pause");
                videoContents.pause();
            }
        }

        function hideControllButton(selector){
            var wrapper = setSelector(selector).wrapper;
            var controllBtn = setSelector(selector).controllBtn;
            var setTime;
            var time=1000;
            var act;
            wrapper.on("mouseleave",function(){
                act = true;
                setHideFunctionTime()
            });
            wrapper.on("mouseenter",function(){
                controllBtn.fadeIn();
                act =false;
                setHideFunctionTime()
            });

            function setHideFunctionTime(){
                setTime=setTimeout( function(){
                    if(act===true){
                        controllBtn.fadeOut();
                    } else {
                        clearInterval(setTime);
                    }
                },time)
            }

        }
        return{
            init:init
        }
    })();
    return videoControll;
});
