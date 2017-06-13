/*
********************************************************************************
    layerPop 작성
    작성일 : 2017.06.08
    작성자 : 김영훈
    내용 : 공통 레이어 팝업의 닫기 관련한 스크립트
********************************************************************************
*/
define([
    'jquery'
    ,'layerConstant'
], function($,LAYER){
    var closeLayerFunction = (function(){
        function dimClose(){
            $(".dim").on("click", function(){
                $(this).remove();
                getTarget().addClass("layer-dummy");
            });
        }

        function closeLayer(target){
            target.addClass("layer-dummy").removeAttr("data-layer-index");
            $("[data-dim-index='" + LAYER.INDEX + "']").remove();
            LAYER.INDEX--;
        }

        return {
            dimClose:dimClose,
            closeLayer:closeLayer
        }
    }());
    return closeLayerFunction;

})
