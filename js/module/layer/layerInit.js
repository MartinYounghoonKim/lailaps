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
    ,'layerOptions'
], function($,layerMake,setLayerClass,layerOptions){
    var layerInit = ( function(layerInit){
        function init(options){
            bindEvents(options);
        }

        function setSelector(selector){
            return {
                wrapper : $(selector.wrapper),
                openButton : $(selector.openButton),
				closeBtn : $(selector.closeBtn)
            }
        }

        function bindEvents(selector){
            var openBtn= setSelector(selector).openButton;
            var openKey;
            var target;
            openBtn.on("click", function(){
                openKey = $(this).data("open-layer");
                layerMake.init(openKey);
                target = layerMake.getTarget();
                setLayerClass.init(target);
            })

        }
        return{
            init : init
        }
    }());
    return layerInit;
})
