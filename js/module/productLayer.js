/*
********************************************************************************
    layerPop 작성
    작성일 : 2017.05.22
    작성자 : 김영훈
    내용 : 공통 레이어 팝업
		- 레이어 팝업은 버튼클릭시 활성화되는 부분 뿐만 아니라, 코드로도 실행할 수 있도록 만듬.
********************************************************************************
*/
define([
	'jquery'
],function ($) {
    var productLayer = function(options){
        var openButton = $(options.openBtn);
        var contentsTarget;
        var contentsDestination = $(options.contentsDestination);
        var temp;
        var sizeX;
        var sizeY;

        bindEvents();
        function bindEvents(){
            openButton.on("click", function(){
                temp = $(this).data("open-layer");
                cloneLayerContents();
            })
        }

        function cloneLayerContents(){
            contentsTarget = $(".products-view__contents__thumnail__view-section__products-img > ul > li.on > img");
            contentsTarget.clone().appendTo(contentsDestination);
            var contents= $(".layer-pop__inner-wrap > img");
            openLayer( getLayerSize(contents) );
        }

        function getLayerSize(target){
            return {
                contentWidth : function(){
                    return target.width();
                },
                contentHeight : function(){
                    return target.height();
                }
            }
        }

        function openLayer(contentsInformation){
            $("#"+temp).css({
                "margin-left" : -contentsInformation.contentWidth()/2 + "px",
                "margin-top" : -contentsInformation.contentHeight()/2 + "px"
            })
            $("#"+temp).stop().animate({
                "width" : contentsInformation.contentWidth() + "px",
                "height" : contentsInformation.contentHeight() + "px"
            }).removeClass("layer-dummy");

            var makeDim= ( function(){
                $('body').append("<div class='dim'></div>")
            }());
        }
    };
    return productLayer;
});
