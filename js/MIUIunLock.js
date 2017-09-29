/**
 * Created by Administrator on 2017/9/19.
 */
$(function(){
    var $share = $(".share");
    $share.mouseover(function(){
        $(this).find($("img")).css("display","block");
    });
    $share.mouseout(function(){
        $(this).find($("img")).css("display","");
    });
    $(".toTop").click(function(){
        var top = document.body.scrollTop || document.documentElement.scrollTop;
        scrollBy(0,-top);
    })
});