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
    ,'layerClose'
    ,'postApi'
], function($,layerClose,daum){
    var getPostApi= (function(){
        var wrapper;
        var contents;
        var renderingDom;
        var postNumberField;
        var postAddressField1;
        var postAddressField2;

        function init(options){
            wrapper = $(options.wrapper);
            contents = $(options.contents);
            renderingDom = contents.get(0);
            postNumberField = $("#address1");
            postAddressField1 = $("#address2");
            postAddressField2 = $("#address3");
            makePostApi();
        }

        function makePostApi(){
            daum.postcode.load(function(){
                new daum.Postcode({
                    oncomplete: function(data) {
                        var fullAddr = data.address;
                        var extraAddr = '';
                        if(data.addressType === 'R'){
                            if(data.bname !== ''){
                                extraAddr += data.bname;
                            }
                            if(data.buildingName !== ''){
                                extraAddr += (extraAddr !== '' ? ', ' + data.buildingName : data.buildingName);
                            }
                            fullAddr += (extraAddr !== '' ? ' ('+ extraAddr +')' : '');
                        }
                        postNumberField.val(data.zonecode);
                        postAddressField1.val(fullAddr);
                        postAddressField2.val(data.addressEnglish);
                        
                        layerClose.closeLayer(wrapper);
                    }
                }).embed(renderingDom);
            });
        }

        return {
            init : init,
            makePostApi:makePostApi
        }
    })();
    return getPostApi;

})
