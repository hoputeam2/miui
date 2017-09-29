/**
 * Created by Administrator on 2017/9/22.
 */
$(function(){
    var $share = $(".share"),
        top = document.body.scrollTop || document.documentElement.scrollTop,
        $pageNav = $(".pageNav");
    $share.mouseover(function(){
        $(this).find($("img")).css("display","block");
    });
    $share.mouseout(function(){
        $(this).find($("img")).css("display","");
    });
    $(".toTop").click(function(){
        scrollBy(0,-top);
    });

    $pageNav.find($("span")).click(function(){
        scrollTo(0,1060);
    });

    document.onscroll=function(){

        top = document.body.scrollTop || document.documentElement.scrollTop;
        if(top>=1060){
            $pageNav.css({"position":"fixed","top":"0","left":"0","right":"0"});
            $(".topSpeed").css("margin-top","6rem")
        }else{
            $pageNav.removeAttr("style");
        }
        if(top>=1060&&top<10000){
            $pageNav.find($("i")).eq(0).css("color","#00A5E2");
            $pageNav.find($("span")).eq(0).css("color","#00A5E2");
        }
        else{
            $pageNav.find($("i")).css("color","");
            $pageNav.find($("span")).css("color","");
        }
    };

    var opacity = 0;
    setInterval(function(){
        opacity +=0.1;
        if(opacity>0.5)opacity=0;
        $(".bgFlash").css("opacity",opacity)

    },150)

});