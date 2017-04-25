/*
*********************************************************************************
    함수 실행 선언
    작성일 : 2017.04.24
    작성자 : 김영훈
    내용 : 각 기능별 스크립트 기능 실행
*********************************************************************************
*/
$(document).ready( function(){
    responsive.init();
})
$(window).resize(function(){
    responsive.init();
})
/*
*********************************************************************************
    reponsive 작성
    작성일 : 2017.04.24
    작성자 : 김영훈
    내용 : 해상도별 기능 분기 처리를 위한 스크립트
*********************************************************************************
*/
var CURRENT_SIZE = "";
var TABLET = 800 ;
var MOBILE = 640 ;
var responsive ={
    init : function(){
        this.windowSize = Math.max( document.documentElement.clientWidth | window.innerWidth | window.availWidth);
        this.resolution;
        this.oldSize;
        this.newSize;
        //start function
        this.checkSize();
        this.callSize();
    },
    checkSize:function(){
        this.resolution = this.windowSize;
        if(this.resolution > TABLET ){
            this.resolution = "PC";
        } else if ( (this.resolution <= TABLET) && (this.resolution > MOBILE) ) {
            this.resolution="Tablet";
        } else if ( this.resolution <= MOBILE){
            this.resolution="Mobile";
        }
    },
    callSize:function(){
        this.newSize = this.resolution;
        if(this.newSize !== this.oldSize){
            this.oldSize = this.newSize;
            CURRENT_SIZE = this.oldSize;
            //디바이스 해상도 체크
            console.log(":::: Device Size Check : " + CURRENT_SIZE + " ::::");
        }

    }
}
