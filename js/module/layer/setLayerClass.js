/*
********************************************************************************
    setLayerClass 작성
    작성일 : 2017.06.12
    작성자 : 정진배
    내용 : 공통 레이어 팝업 사이즈를 결정하는 부분
********************************************************************************
*/
define([
    'jquery'
], function($){
    var setLayerClass = {
        init:function(layerTarget){
            this.target =layerTarget;
            this.temp = this.target.data("layer-options").size;

            this.setClass();
        },
        setClass :function(){
            console.log(this.target);
            this.target.addClass("is-" + this.temp);
        }
    }

    return setLayerClass;
})
