$(function(){
    $("li a").click(function(e){
        $.scrollTo(this.hash || 0,300);
        e.preventDefault();
    });
});
        
start();
var imgs=2;
var now=0;
function start(){
    $("[class^=slide]").eq(0).siblings().css({"opacity":"0","transition":"all .2s ease-in"});
    setInterval(function(){slide();},3000);
}
function slide(){
    now=now==imgs?0:now+=1;
    $("[class^=slide]").eq(now-1).css({"opacity":"0","transition":"all .2s ease-in"});
    $("[class^=slide]").eq(now).css({"opacity":"1","transition":"all .2s ease-in"});

    $(".box").css({"transform":"scaleX(0)"});
    $(".box").eq(now).css({"transform":"scaleX(1)","transition":"all .7s ease-in"});

    $("p.txts").css({"margin-top":"-1000px"});
    $("p.txts").eq(now).css({"margin-top":"0","transition":"all 1s ease-in"})
}

$(function(){
    $(".today").css({"margin-left":"-1000px","opacity":"0"});
    $(".bean").css({"margin-right":"-2000px","opacity":"0"});

    $(window).on("scroll",function(){
        if($(window).scrollTop()>80){
            $(".today").animate({marginLeft:"0",opacity:"1"},600,"linear",function(){
              
            });
            $(".bean").animate({marginRight:"0",opacity:"1"},700,"linear",function(){
              
            });
        }
    });
});

$(function(){
    $(".inner").css({"opacity":"0","margin-right":"-2000px"});

    $(window).on("scroll",function(){
        if($(window).scrollTop()>1600){
            $(".inner").animate({marginRight:"0",opacity:"1"},600,"linear")
            
        }
    });
});

$(function(){
    $(".button_3").on("click",function(){
        $(".modal").addClass("on");
        $(".modal button").on("click",function(){
            $(".modal").removeClass("on");
        });
    });
});
