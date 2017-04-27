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
    parellax.init();
    Rolling_transition($("[data-ui-name='visual_rolling']"));
})
$(window).resize(function(){
    responsive.init();
    parellax.sizing();
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
/*
*********************************************************************************
    parellax 작성
    작성일 : 2017.04.26
    작성자 : 김영훈
    내용 : 메인 페렐렉스 기능
*********************************************************************************
*/
var parellax = {
    init: function(){
        this.screenSizeX = screen.availWidth;
        this.screenSizeY = window.innerHeight;
        this.wrap = $("[data-parellax-ui='wrapper']");
        this.contents = $("[data-parellax-ui='contents']", this.wrap);
        this.navi=$("[data-parellax-ui='navigation']");
        this.cnt=0;
        this.arr =[];
        this.state=true;

        //this.sizing();
        //this.scrolling();
        this.location();
    },
    location:function(){

    },
    sizing:function(){
        this.screenSizeY = window.innerHeight;
        this.contents.css({
            "height" : this.screenSizeY + "px"
        });
    },
    scrolling:function(){
        var that = this;
        this.contents.each( function(){
            that.arr.push($(this).offset().top);
        })
        $("html, body").on("mousewheel", function(event, dir){
            if(that.state == false){
                return false;
            }
            that.state=false;
            if(dir == -1){
                that.cnt > that.arr.length ? false : that.cnt++;
            } else {
                that.cnt < 0 ? false : that.cnt--;
            }
            that.moving();
        })
    },
    moving:function(){
        var that =this;
        if(this.arr[this.cnt]){
            $("html, body").stop().animate({
                "scrollTop" : this.arr[this.cnt] + "px"
            },{
                easing : "easeInOutCubic",
    			duration : 700,
                complete:function(){
                    that.state=true;
                }
            })
        } else {
            this.state=true;
        }
    }
}

/*
*********************************************************************************
    reponsive 작성
    작성일 : 2017.04.24
    작성자 : 이영주
    내용 : 슬라이드 기능
*********************************************************************************
*/
function Rolling_transition(obj){
	function TransitionVisual(obj){
		this.element = $(obj);
	}
	TransitionVisual.prototype.init = function(){
		this.ctrl = $(this.element.attr("data-ctrl"), this.element);
		this.prev = $(".prev", this.ctrl);
		this.stop = $(".stop", this.element);
		this.next = $(".next", this.ctrl);
		this.listwrap = $(this.element.attr("data-list"), this.element);
		this.list = $("li", this.listwrap);
		this.description = $("ul", this.ctrl.parents(".summaries"));
		this.description_list = $("li", this.description);
		this.cnt = 0;
		this.lastCnt = 0;
		this.state = true;
		this.useThumbs = false;
		this.thumbs = $(".tabs", this.element);
		this.thumb = $("li", this.thumbs);
		this.duration = 1000;
		var that = this, auto, delay = this.element.attr("data-delay"), power = "on";
		this.list.eq(0).addClass("on");

		if(this.thumb.size() > 0){
			this.useThumbs = true;
			this.thumb.eq(0).addClass("on");
		}
		if(this.list.size() == 1){
			this.ctrl.remove();
			this.description.addClass("single");
			return false;
		}

		this.list.eq(0).css("z-index", this.list.size() - 1);
		this.description_list.each(function(i){
			if(that.cnt != i){
				$(this).css({"z-index" : that.description_list.size() - i - 1, "opacity" : 0});
			}else{
				$(this).css({"z-index" : that.description_list.size() - 1, "opacity" : 1});
			}
		});

		auto = setInterval(function(){
			if(power == "off") return false;
			that.next.click();
		}, delay);

		this.prev.click(function(){
			if(that.state == false) return false;
			that.state = false;
			if(that.cnt > 0){
				that.cnt--;
			}else{
				that.cnt = that.list.size() - 1;
			}
			that.move();
			return false;
		});
		this.next.click(function(){
			if(that.state == false) return false;
			that.state = false;
			if(that.cnt < that.list.size() - 1){
				that.cnt++;
			}else{
				that.cnt = 0;
			}
			that.move();
			return false;
		});
		this.stop.click(function(){
			if(power == "on"){
				power = "off";
				$(this).addClass("play");
			}else{
				power = "on";
				$(this).removeClass("play");
			}
			return false;
		});
		this.thumb.click(function(){
			if(that.cnt == $(this).index()){
				that.state = true;
				return false;
			}
			that.state = true;
			that.cnt = $(this).index();
			that.move();
			return false;
		});
	}
	TransitionVisual.prototype.move = function(){
		this.useThumbnails();
		var that = this;
		this.list.each(function(i){
			if(that.cnt != i){
				$(this).css("z-index", $(this).css("z-index") - 1);
				$(this).removeClass("on");
			}else{
				$(this).css("z-index", that.list.size() - 1);
				$(this).addClass("on");
			}
		});
		this.description_list.each(function(i){
			if(that.cnt != i){
				$(this).css("z-index", $(this).css("z-index") - 1);
			}else{
				$(this).css("z-index", that.description_list.size() - 1);
			}
		});

		if(this.lastCnt != this.cnt){
			this.description_list.eq(this.lastCnt).animate({
				"opacity" : 0
			},{
				duration : that.duration / 2
			});
		}
		this.description_list.eq(this.cnt).css({"opacity" : 0}).animate({
			"opacity" : 1
		},{
			duration : that.duration / 2
		});
		this.list.eq(this.cnt).css({"opacity" : 0}).animate({
			"opacity" : 1
		},{
			duration : that.duration,
			complete : function(){
				that.state = true;
			}
		});
		this.lastCnt = this.cnt;
	}
	TransitionVisual.prototype.useThumbnails = function(){
		this.thumb.removeClass("on").eq(this.cnt).addClass("on");
	}

	var i = 0, inst;
	for(var i = 0; i < obj.length; i++){
		var inst = new TransitionVisual(obj[i]);
		inst.init();
	}
}
/*********************************************************************************
    reponsive 작성
    작성일 : 2017.04.26
    작성자 : 정진배
    내용 : 프로모션페이지 아코디언 기능
*********************************************************************************/
$(function(){
    var promotionBtn = $(".promotion_box > a");
    var promotionCon = $(".promotion_contents");
    var promotionArrow = $(".arrow");

    promotionBtn.click(function(e){
        e.preventDefault();
        if($(this).parent().hasClass("on")){
            $(this).parent().removeClass("on");
            $(this).parent().next().removeClass("on");
            $(this).parent().next().slideUp("2000");
            promotionArrow.attr("src", "../images/arrow/arrow02.png")
        } else {
            promotionBtn.parent().next().slideUp();
            promotionBtn.parent().removeClass("on");
            promotionArrow.attr("src", "../images/arrow/arrow02.png")
            $(this).parent().addClass("on");
            $(this).parent().next().slideDown("50");
            $(this).find(".arrow").attr("src", "../images/arrow/arrow02_on.png")
        }
    })
})
/*
*********************************************************************************
    show animation 작성
    작성일 : 2017.04.26
    작성자 : 김영훈
    내용 : 컨텐츠가 화면에 보일 시 컨텐츠가 날라오는 기능
*********************************************************************************
*/
var showAnimation=function(){
    this.wrap = $("[data-show-ui='wrapper']");
    this.left = $("[data-show-ui='left']", this.wrap);
    this.right = $("[data-show-ui='right']", this.wrap);
}
showAnimation.prototype={
    init:function(){

    }
}
new showAnimation().init();
