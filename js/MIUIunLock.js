/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    //获取到滚动条滚动的距离
    var $share = $(".share");
    /*鼠标移动到右侧分享时对应的图片出现*/
    $share.mouseover(function(){
        $(this).find($("img")).css("display","block");
    });
    /*鼠标移出时图片隐藏*/
    $share.mouseout(function(){
        $(this).find($("img")).css("display","");
    });
    /*回到顶部*/
    $(".toTop").click(function(){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        scrollBy(0,-top);
    })
});