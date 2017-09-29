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

    $pageNav.find($("span")).eq(0).click(function(){
        scrollTo(0,1060);
    });
    $pageNav.find($("span")).eq(1).click(function(){
        scrollTo(0,13200);
    });
    $pageNav.find($("span")).eq(2).click(function(){
        scrollTo(0,17600);
    });


    document.onscroll=function(){
        top = document.body.scrollTop || document.documentElement.scrollTop;
        var nav_logo = $pageNav.find($("i"));
        var nav_txt = $pageNav.find($("span"));
        if(top>=1060){
            $pageNav.css({"position":"fixed","top":"0","left":"0","right":"0"});
            $(".topSpeed").css("margin-top","6rem")
        }
        else{
            $pageNav.removeAttr("style");
        }
        if(top>=1060&&top<13200){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(0).css("color","#00A5E2");
            nav_txt.eq(0).css("color","#00A5E2");
        }
        else if(top>=13200&&top<17600){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(1).css("color","#00A5E2");
            nav_txt.eq(1).css("color","#00A5E2");
        }
        else if(top>=17600){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(2).css("color","#00A5E2");
            nav_txt.eq(2).css("color","#00A5E2");
        }
        else{
            nav_logo.css("color","");
            nav_txt.css("color","");
        }
    };

    var opacity = 0;
    setInterval(function(){
        opacity +=0.1;
        if(opacity>0.5)opacity=0;
        $(".bgFlash").css("opacity",opacity)

    },150)

});


$(function() {
    $(".sys_button").click(function () {

        $(this).parent().find($(".sys_button")).css("display", "none");
        $(this).parent().find($(".sys_close")).css("display", "block");
        $(this).parent().find($("video")).get(0).play();

        $(".sys_close").click(function () {
            $(this).parent().find($("video")).get(0).load();
            $(this).parent().find($(".sys_button")).css("display", "block");
            $(this).parent().find($(".sys_close")).css("display", "none");
        });



    });
});