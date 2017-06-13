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
], function($){
    var layerMake = ( function(){
        var LAYER_OPTIONS = {
            INDEX : -1
        }
        function init(key){
            if(key){
                showLayerPop(key);
            } else {
                appendLayerPop();
            }
        }

        //기존의 팝업이 있을 경우
        function showLayerPop(value){
            LAYER_OPTIONS.INDEX++;
            var layerTarget= $("#" + value);

            //layerTarget.clone().removeClass("layer-dummy").appendTo("body").attr("data-layer-index",LAYER_OPTIONS.INDEX);
            layerTarget.removeClass("layer-dummy").attr("data-layer-index",LAYER_OPTIONS.INDEX);
            controllDim();
            bindCloseLayerEvent();
        }

        //팝업이 동적으로 생성되어야 하는 경우
        function appendLayerPop(){

        }

        function controllDim(){
            var dim = document.createElement("div");
                dim.setAttribute("class","dim");
                $('body').append(dim);
        }

        function getTarget(){
            return $("[data-layer-index='" +LAYER_OPTIONS.INDEX + "']" );
        }

        function bindCloseLayerEvent(){
            var temp = getTarget().data("layer-options").clickable;
            if(temp==="true"){
                $(".dim").on("click", function(){
                    $(this).remove();
                    getTarget().hide();
                });
            }
        }
        return {
            init : init,
            getTarget : getTarget
        }
    }());

    return layerMake;
})
