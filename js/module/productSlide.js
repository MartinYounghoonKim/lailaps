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
	var productSlide = (function(){
        var SLIDE_OPTIONS ={
            INDEX : 0,
            DIRECTION : 0,
            CLICKABLE : true
        }
        function init(options){
            bindEvents(options);
        }

        function setSelector(selector){
            return{
                "wrapper" : $(selector.wrapper),
                "viewWrapper" : $(selector.viewWrapper),
                "viewPrevBtn" : $(selector.viewPrevBtn, selector.viewWrapper),
                "viewNextBtn" : $(selector.viewNextBtn, selector.viewWrapper),
                "viewImgWrapper" : $(selector.viewImgWrapper),
                "viewImgList" : $(selector.viewImgList),
                "controllWrapper" : $(selector.controllWrapper),
                "controllPrev" : $(selector.controllPrev, selector.controllWrapper),
                "controllNext" : $(selector.controllNext, selector.controllWrapper),
                "thumnailWrapper" : $(selector.thumnailWrapper),
                "thumnailList" :  $(selector.thumnailList)
            }
        }

        function bindEvents(selector){
            var viewPrevBtn = setSelector(selector).viewPrevBtn;
            var viewNextBtn = setSelector(selector).viewNextBtn;
            var controllPrev = setSelector(selector).controllPrev;
            var controllNext = setSelector(selector).controllNext;
            var thumnailList = setSelector(selector).thumnailList;

            viewPrevBtn.on("click", function(){
                if(SLIDE_OPTIONS.CLICKABLE === false){
                    return false;
                }
                activeThumnailList(selector, "prev");
            });

            viewNextBtn.on("click", function(){
                if(SLIDE_OPTIONS.CLICKABLE === false){
                    return false;
                }
                activeThumnailList(selector, "next");
            });

            thumnailList.on("click", function(){
                activeThumnailList(selector, $(this));
            })

            controllPrev.on("click", function(){
                moveControllerLeft(selector);
            });
            controllNext.on("click", function(){
                moveControllerRight(selector);
            });
        }

        function moveControllerLeft(selector){
            var thumnailWrapper = setSelector(selector).thumnailWrapper;
            if(SLIDE_OPTIONS.DIRECTION === 0){
                return false;
            }
            SLIDE_OPTIONS.CLICKABLE= false;
            SLIDE_OPTIONS.DIRECTION = 0;
            thumnailWrapper.stop().animate({
                "left" : 0
            },{
                "duration" : 1000,
                "complete" : function(){
                    SLIDE_OPTIONS.CLICKABLE= true;
                }
            });

        }

        function moveControllerRight(selector){
            var thumnailWrapper = setSelector(selector).thumnailWrapper;
            if(SLIDE_OPTIONS.DIRECTION === 1){
                return false;
            }
            SLIDE_OPTIONS.CLICKABLE= false;
            SLIDE_OPTIONS.DIRECTION = 1;
            thumnailWrapper.stop().animate({
                "left" : -100 + "%"
            },{
                "duration" : 1000,
                "complete" : function(){
                    SLIDE_OPTIONS.CLICKABLE= true;
                }
            });
        }

        function showProductImage(selector, temp){
            var oldTemp = temp.oldIdx;
            var newTemp = temp.newIdx;
            var viewImgList=setSelector(selector).viewImgList;

            viewImgList.eq(oldTemp).stop().animate({
                "opacity" : 0
            }).removeClass("on");
            viewImgList.eq(newTemp).stop().animate({
                "opacity" : 1
            }).addClass("on");
        }

        function activeThumnailList(selector, dir){
            var thumnailWrapper = setSelector(selector).thumnailWrapper;
            var thumnailList = setSelector(selector).thumnailList;
            var oldIndex;
            var newIndex;

            if(typeof dir === "string"){
                switch(dir){
                    case "prev" : leftDirection();
                    break;
                    case "next" : rightDirection();
                    break;
                }
            } else if (typeof dir === "object"){
                activeThisThumnail();
            };

            function leftDirection(){
                if(SLIDE_OPTIONS.INDEX < 1) {
                    return false;
                }
                if(SLIDE_OPTIONS.INDEX === 5){
                    moveControllerLeft(selector);
                    SLIDE_OPTIONS.DIRECTION=0;
                }
                oldIndex= SLIDE_OPTIONS.INDEX;
                SLIDE_OPTIONS.INDEX--;
                newIndex= SLIDE_OPTIONS.INDEX;
                setAativeClass(getCurrentIndex(oldIndex, newIndex));
            }

            function rightDirection(){
                if(SLIDE_OPTIONS.INDEX > 8) {
                    return false;
                }
                if(SLIDE_OPTIONS.INDEX === 4){
                    moveControllerRight(selector);
                    SLIDE_OPTIONS.DIRECTION=1;
                }
                oldIndex= SLIDE_OPTIONS.INDEX;
                SLIDE_OPTIONS.INDEX++;
                newIndex= SLIDE_OPTIONS.INDEX;

                setAativeClass(getCurrentIndex(oldIndex, newIndex))

            }

            function activeThisThumnail(){
                oldIndex= SLIDE_OPTIONS.INDEX;
                SLIDE_OPTIONS.INDEX =dir.index();
                newIndex= SLIDE_OPTIONS.INDEX;
                setAativeClass(getCurrentIndex(oldIndex, newIndex));
            }

            function setAativeClass(temp){
                thumnailList.eq(temp.oldIdx).removeClass("on");
                thumnailList.eq(temp.newIdx).addClass("on");
                showProductImage(selector, temp);
            }
        }

        function getCurrentIndex(oldIdx, newIdx){
            return {
                oldIdx : oldIdx,
                newIdx : newIdx
            }
        }

        return {
            init: init
        }
    })();
	return productSlide;
});
