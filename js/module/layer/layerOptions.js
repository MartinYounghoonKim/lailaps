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
    var layerOptions = ( function(){
        function init(options, constant){
            console.log(constant);
            if(options.clickable === "true"){
                clickable();
            }
        }

        function clickable(){
            var dim = $(".dim");

            dim.on("click", function(e){
    			e.stopPropagation();
    			closeLayer();
            });

            function closeLayer(){
    			if(LAYER_OPTIONS.index == -1) return false;
    			var closeTarget = $("[data-layer-index='" + LAYER_OPTIONS.index + "']" );
    			closeTarget.remove().removeAttr("data-layer-index");
    			removeDim();
    			LAYER_OPTIONS.index--;
    		}
        }
        return {
            init : init
        }
    }());
    return layerOptions;
})
