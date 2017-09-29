/**
 * Created by Administrator on 2017/9/19.
 */
//轮播
window.onload=function(){
    var box_img = document.getElementsByClassName("box_img")[0];
    var circle = document.getElementsByClassName("button");
    var timer=null;
    var idx;

    for(var i=0;i<circle.length;i++){
        (function(n){
            circle[n].onclick=function(){
                button_control(this,n);
            }
        })(i)
    }
    function moving(speed,terminal,flag){
        var new_left=parseInt(box_img.style.left);
        if(new_left==terminal){
            new_left=flag;
        }else{
            new_left+=speed;
        }
        box_img.style.left = new_left+"px";
            //console.log(new_left);
        idx=Math.abs(new_left/1920);
        for(var i=0;i<circle.length;i++){
            circle[i].setAttribute("class","button");
        }
        //circle[Math.abs(new_left/1920)].setAttribute("class","on");
        circle[idx].setAttribute("class","button on");

    }
    function button_control(that,num){
        for(var i=0;i<circle.length;i++){
            circle[i].setAttribute("class","button");
        }
        that.setAttribute("class","button on");
        box_img.style.left=num*(-1920)+"px";
        //console.log(box_img.style.left);
    }

    timer=setInterval(function(){
        moving(-1920,-1920,0);
    },5000);
};