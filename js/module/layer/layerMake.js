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
        var LAYER_OPTIONS ={
			INDEX : -1,
			NEW_LAYER : undefined
		}

        function init(me){
            try{
                LAYER_OPTIONS.INDEX++;
                var temp =me.data("open-layer");
                var layerTarget = $("#" + temp);

                layerTarget.clone().removeClass("layer-dummy").appendTo("body").attr("data-layer-index",LAYER_OPTIONS.INDEX);
                LAYER_OPTIONS.NEW_LAYER = $("[data-layer-index='" + LAYER_OPTIONS.INDEX + "']");
                makeDim();
                return {
                    getOptions : function(){
                        return layerTarget.data("layer-pop");
                    },
                    target : function(){
                        return NEW_LAYER;
                    }
                }

            } catch(e){
            }
        }

        function makeDim(){
            var dim = document.createElement("div");
                dim.setAttribute("class","dim");
                $('body').append(dim);
        }
        return{
            init : init,
            layerOptions : LAYER_OPTIONS
        }
    }());
    return layerMake;
})
