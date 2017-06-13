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
    ,'setLayerClass'
    ,'setLayerOptions'
    ,'layerClose'
], function($,layerMake,setLayerClass,setLayerOptions,layerClose){
    var layerInit = ( function(layerInit){
        function init(options){
            bindEvents(options);
        }

        function setSelector(selector){
            return {
                wrapper : $(selector.wrapper),
                openButton : $(selector.openButton),
				closeButton : $(selector.closeButton)
            }
        }

        function bindEvents(selector){
            var openBtn= setSelector(selector).openButton;
            var closeBtn = setSelector(selector).closeButton;
            var openKey;
            var target;
            var options;
            openBtn.on("click", function(){
                openKey = $(this).data("open-layer");
                target = $("#" + openKey);
                options = target.data("layer-options");

                setLayerOptions(target, options);
            });
            closeBtn.on("click", function(){
                layerClose.closeLayer(target);
            });
        }

        return{
            init : init
        }
    }());

    return layerInit;
})
