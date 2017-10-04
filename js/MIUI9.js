/**
 * Created by Administrator on 2017/9/22.
 */
$(function(){
    var $share = $(".share"),
        //获取到滚动条滚动的高度
        top = document.body.scrollTop || document.documentElement.scrollTop,
        $pageNav = $(".pageNav");
    $share.mouseover(function(){
        //鼠标移动到右侧分享栏时对应的图片出现
        $(this).find($("img")).css("display","block");
    });
    $share.mouseout(function(){
        //鼠标移出图片隐藏
        $(this).find($("img")).css("display","");
    });
    //点击回到顶部
    $(".toTop").click(function(){
        scrollTo(0,-top);
    });
    //页面导航 点击滚动到对应模块
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
        //当滚动高度大于1060时页面导航改为固定定位
        if(top>=1060){
            $pageNav.css({"position":"fixed","top":"0","left":"0","right":"0"});
            $(".topSpeed").css("padding-top","6rem")
        }
        //其他情况时清除页面导航样式
        else{
            $pageNav.removeAttr("style");
        }
        //当滚动高度大于等于1060小于13200时，属于极速功能模块，页面导航第一个LOGO变色
        if(top>=1060&&top<13200){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(0).css("color","#00A5E2");
            nav_txt.eq(0).css("color","#00A5E2");
        }
        //当滚动高度大于等于13200小于17600时，属于闪电系统模块，页面导航第二个LOGO变色
        else if(top>=13200&&top<17600){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(1).css("color","#00A5E2");
            nav_txt.eq(1).css("color","#00A5E2");
        }
        //当滚动高度大于等于17600时，属于畅快体验模块，页面导航第三个LOGO变色
        else if(top>=17600){
            nav_logo.css("color","");
            nav_txt.css("color","");
            nav_logo.eq(2).css("color","#00A5E2");
            nav_txt.eq(2).css("color","#00A5E2");
        }
        //其他情况清空样式
        else{
            nav_logo.css("color","");
            nav_txt.css("color","");
        }
    };
    //通过改变透明度实现+的背景
    var opacity = 0;
    setInterval(function(){
        opacity +=0.1;
        if(opacity>0.5)opacity=0;
        $(".bgFlash").css("opacity",opacity)

    },150)

});

//控制视频播放、关闭
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