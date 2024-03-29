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
    var layerPop = (function(){
		var LAYER_OPTIONS ={
			index : -1,
			newLayer : undefined
		}

        function init(options){
            var wrapper = setSelector(options).wrapper;
            var openBtn = setSelector(options).openBtn;
            var layerOptions = eval(wrapper.data('layer-pop'));

            bindEvents(options);
        }

        function setSelector(selector){
            return {
                wrapper : $(selector.wrapper),
                openBtn : $(selector.openBtn),
				closeBtn : $(selector.closeBtn)
            }
        }

        function bindEvents(options){
            var openBtn = setSelector(options).openBtn;
			var closeBtn = setSelector(options).closeBtn;
            openBtn.unbind("click").on("click", function(evt){
				evt.stopPropagation();
                openLayer(evt, $(this));
            });
			closeBtn.unbind("click").on("click",function(){
				closeLayer();
			});
			/*
				$('body').unbind("click").on('click', closeBtn, closeLayer);
			*/
			$(document).unbind("keydown").on("keydown",function(e){
				if(e.keyCode == 27){
					closeLayer();
				}
			});
        }

        function openLayer(evt, me, getOptions){
			LAYER_OPTIONS.index++;
			appendDim();
			var layerTarget = sortLayerContents(evt, me, getOptions).target();
			sortLayerContents(evt, me, getOptions).options();
        }

		function sortLayerContents(evt, me, getOptions){
			if(evt.type=="click"){	/* 버튼 클릭시, 레이어 팝업 활성화 */
				var temp = me.data("open-layer");
				var layerTarget = $("#" + temp);

				return {
					target : function(){
						layerTarget.clone().removeClass("layer-dummy").appendTo("body").attr("data-layer-index",LAYER_OPTIONS.index);
						return layerTarget;
					},
					options : function(){
						getLayerOptions(layerTarget.data("layer-pop"))
					}
				}
			} else {	/* 버튼 클릭을 사용하지 않고, 레이어 팝업 활성화 */
				var temp = me;
				var layerContents = layerStructure(temp);

				return {
					target : function(){
						$('body').append(layerContents);
						LAYER_OPTIONS.newLayer = $("[data-layer-index='" + LAYER_OPTIONS.index +"']");
						return LAYER_OPTIONS.newLayer;
					},
					options : function(){
						getLayerOptions(getOptions)
					}
				}
			}
		}

		function layerStructure(temp){
			var str = "<div class='layer-pop "+ temp +"' data-layer-index='"+ LAYER_OPTIONS.index +"'>";
				str +="		<div class='contents'>";
				str +="			<div class='layer-pop__inner-wrap'>";
				str +="			</div>";
				str +="		</div>";
				str +="</div>";

				return str;
		}

		function closeLayer(){
			if(LAYER_OPTIONS.index == -1) return false;
			var closeTarget = $("[data-layer-index='" + LAYER_OPTIONS.index + "']" );
			closeTarget.remove().removeAttr("data-layer-index");
			removeDim();
			LAYER_OPTIONS.index--;
		}

        function appendDim(){
			return (function(){
				var dim = document.createElement("div");
	                dim.setAttribute("class","dim");
					$('body').append(dim);
			})();
        }

		function removeDim(){
			if(LAYER_OPTIONS.index > -1){
				$(".dim")[LAYER_OPTIONS.index].remove();
			}
		}

		function getLayerOptions(options){
			var layerOptions = options;
			typeof layerOptions =="string" ? layerOptions = JSON.parse(layerOptions) : false;
			if(layerOptions.type){
				setLayerClass(layerOptions.type);
			}
			if(layerOptions.clickable == "true"){
				 dimClickable();
			}
			if( layerOptions.title || layerOptions.contents){
				setLayerContents(layerOptions);
			}
		}

		function dimClickable(){
			var dim = $(".dim");
			dim.unbind("click").on("click",function(e){
				e.stopPropagation();
				closeLayer();
			})
		}

		function setLayerClass(type){
			if(type=="system"){
				LAYER_OPTIONS.newLayer.addClass("is-system");
			}

		}

		function setLayerContents(layerOptions){
			if(layerOptions.title){
				var titleDom = "<strong class='layer-pop__inner-wrap__title'>" + layerOptions.title +"</strong>";
				LAYER_OPTIONS.newLayer.find(".layer-pop__inner-wrap").append(titleDom);
			}
			if(layerOptions.contents){
				var contentsDom = "<p class='layer-pop__inner-wrap__paragraph'><span>" + layerOptions.contents +"</span></p>";
				LAYER_OPTIONS.newLayer.find(".layer-pop__inner-wrap").append(contentsDom);
			}
			if(layerOptions.closeBtn=="true"){
				var contentsDom = "<button type='button' class='layer-pop__close-btn' data-close-layer>닫기</button>";
				LAYER_OPTIONS.newLayer.find(".layer-pop__inner-wrap").append(contentsDom);
			}
		}
        return {
            init : init,
			openLayer : openLayer
        }
    })();
    return layerPop;
});
