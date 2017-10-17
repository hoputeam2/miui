/**
 * Created by Administrator on 2017/9/25.
 */
$(function(){
//    品牌logo部分背景的变化
    var idx=0;         <!--???-->
    $(".logo_list").find($("li")).click(function(){
        $(".logo_list").find($("li")).css("background-position-y","-2px");
        $(".logo_list").find($("p")).attr("class","");
        $(this).css("background-position-y","-84px");
        $(this).find($("p")).attr("class","on_choose");
//        将i赋值给当前索引
        for(var i=0;i<$(".logo_list").find($("li")).length;i++){
//            $(this)取出来的是一个数组，所以加0,
            if($(this)[0]===$(".logo_list").find($("li"))[i]){
                idx=i;
            }
        }
    });
//   鼠标悬停改变背景
    $(".logo_list").find($("li")).mouseover(function(){
        $(".logo_list").find($("li")).css("background-position-y","-2px");
        $(".logo_list").find($("li")).eq(idx).css("background-position-y","-84px");
        $(this).css("background-position-y","-166px");
    });
//鼠标移走背景还原
    $(".logo_list").find($("li")).mouseout(function(){
        $(".logo_list").find($("li")).css("background-position-y","-2px");
        $(".logo_list").find($("li")).eq(idx).css("background-position-y","-84px");
    });
});

//二级导航
$(function(){
    $(".base_detail").find($("a")).click(function(){
        $(".base_detail").find($("a")).attr("class","");
        $(this).attr("class","on_hover");
        $(".base_detail").find($("a")).css("color","#1b6cbf");
        $(this).css("color","#5c5c5c");
    });

    $(function(){
        $(".MIUI").focus(function(){
            $(".subnav").css("display","block");
        });
        $(".MIUI").blur(function(){
            $(".subnav").css("display","none");
        });

    });
});
//回到顶部
$(function(){
    //首先将#goback隐藏
    $("#goback").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(function() {
        $(window).scroll(function() {
            if ($(window).scrollTop() > 100) {
                $("#goback").fadeIn(200);
            } else {
                $("#goback").fadeOut(200);
            }
        });
        //当点击跳转链接后，回到页面顶部位置
        $("#goback").click(function() {
            $('body,html').animate({
                    scrollTop: 0
                },
                500);
            return false;
        });
    });

});



