/*
********************************************************************************
    layerPop 작성
    작성일 : 2017.06.08
    작성자 : 김영훈
    내용 : 공통 레이어 팝업의 옵션값에 대한 스크립트
********************************************************************************
*/
define([
    'jquery'
    ,'layerMake'
    ,'layerOptions'
], function($,layerMake,layerOptions){
    var layerInit = ( function(layerInit){

        function init(options){
            bindEvents(options);
        }

        function setSelector(selector){
            return {
                wrapper : $(selector.wrapper),
                openBtn : $(selector.openBtn),
				closeBtn : $(selector.closeBtn)
            }
        }

        function bindEvents(selector){
            var openBtn = setSelector(selector).openBtn;
            var options;
            openBtn.on("click", function(){
                getOptions(
                    layerMake.init($(this)).getOptions(),
                    layerMake.layerOptions
                );
            });
        }

        function getOptions(options, constant){

            var clickable = (function(){
                if(options.clickable === "false"){
                    return false;
                }
                $(".dim").on("click", function(){
                    $(this).remove();
                    closeLayer(constant);
                })
            }());
            var title =(function(){
                if(options.title){
                    var target = constant.NEW_LAYER;
                    if(constant.NEW_LAYER.find(".layer-pop__inner-wrap__title").size() > 0 ){
                        return false;
                    }
                    var titleDom = "<strong class='layer-pop__inner-wrap__title'>" + options.title +"</strong>";
                    constant.NEW_LAYER.find(".layer-pop__inner-wrap").append(titleDom);
                }
            }());
            var data =(function(){
                if(options.data){
                    var target = constant.NEW_LAYER;
                    var dataDom = $(options.data).clone();
                    constant.NEW_LAYER.find(".layer-pop__inner-wrap").append(dataDom);
                }
            }());
        }

        function closeLayer(constant){
            $("[data-layer-index='" + constant.INDEX +"']").remove();
        }



        return {
            init : init
        }

    }());
    return layerInit;
})
