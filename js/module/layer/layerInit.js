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
				closeButton : $(selector.closeButton)
            }
        }

        function bindEvents(selector){
            var openBtn= setSelector(selector).openButton;
            var closeBtn = setSelector(selector).closeButton;
            var openKey;
            var target;
            openBtn.on("click", function(){
                openKey = $(this).data("open-layer");
                layerMake.init(openKey);
                target = layerMake.getTarget();
                setLayerClass.init();
            });
            closeBtn.on("click", function(){
                closeLayerFunction.buttonClose(target);
            });
        }
        var closeLayerFunction = (function(){
            function dimClose(){
                $(".dim").on("click", function(){
                    $(this).remove();
                    getTarget().hide();
                });
            }

            function buttonClose(target){
                target.hide();
                
            }
            return {
                dimClose:dimClose,
                buttonClose:buttonClose
            }
        }());

        return{
            init : init
        }
    }());
    return layerInit;
})
