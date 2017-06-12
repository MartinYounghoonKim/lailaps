/*
********************************************************************************
    getPostApi 작성
    작성일 : 2017.06.12
    작성자 : 김영훈
    내용 : 우편번호 API 호출 모듈러
********************************************************************************
*/
define([
    'jquery'
    ,'layerPop'
    ,'postApi'
], function($,layerPop,daum){
    var getPostApi=( function(){
        function init(options){

            bindEvents(options);
        }
        function setSelector(selector){
            return{
                "getPostButton" : $(selector.getApiButton)
            }
        }

        function bindEvents(selector){
            var getApiButton = setSelector(selector).getPostButton;
            getApiButton.on("click", function(){


                // daum.postcode.load(function(){
                //     new daum.Postcode({
                //         oncomplete: function(data) {
                //             // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
                //             // 예제를 참고하여 다양한 활용법을 확인해 보세요.
                //         }
                //     }).embed();
                // });
            })
        }

        return {
            init : init
        }
    }());
    return getPostApi;
})
