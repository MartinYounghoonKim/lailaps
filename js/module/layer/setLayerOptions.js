/*
********************************************************************************
    setLayerOptions 작성
    작성일 : 2017.06.13
    작성자 : 김영훈
    내용 : 공통 레이어 팝업의 각 옵션값에 따른 스크립트 분기
********************************************************************************
*/
define([
    'jquery'
    ,'layerMake'
], function($,layerMake){
    var setLayerOptions=function(target, options){
        if(typeof target === "object"){
            var layerContents = target;
        }
        var layerOptions = options;
        layerType();

        function layerType(){
            switch(layerOptions.type){
                case "dynamic" : layerMake.dynamicLayerPop(layerContents);
                break;
                case "basic" : layerMake.showLayerPop(layerContents);
                break;
                case "getApi" : layerMake.getApiLayerPop(layerContents);
                break;
                case "new" : console.log(3);
                break;
            }
        }
    }

    return setLayerOptions;
})
