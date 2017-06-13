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
    ,'layerOptions'
], function($,LAYER){
    var layerMake = ( function(){
        function init(key){
            if(key){
                showLayerPop(key);
            } else {
                appendLayerPop();
            }
        }

        //기존의 팝업이 있을 경우
        function showLayerPop(value){
            LAYER.INDEX++;
            console.log(LAYER.INDEX);
            var layerTarget= $("#" + value);

            layerTarget.removeClass("layer-dummy").attr("data-layer-index",LAYER.INDEX);
            makeBackground();
            bindCloseLayerEvent();
        }

        //팝업이 동적으로 생성되어야 하는 경우
        function appendLayerPop(){

        }

        function makeBackground(){
            var dim = document.createElement("div");
                dim.setAttribute("class","dim");
                dim.setAttribute("data-dim-index", LAYER.INDEX);
                $('body').append(dim);
        }

        function getTarget(){
            return $("[data-layer-index='" + LAYER.INDEX + "']" );
        }

        function bindCloseLayerEvent(){
            var temp = getTarget().data("layer-options").clickable;
            if(temp==="true"){
                $(".dim").on("click", function(){
                    $(this).remove();
                    getTarget().addClass("layer-dummy");
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
