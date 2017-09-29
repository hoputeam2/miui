/**
 * Created by Administrator on 2017/9/19.
 */
//轮播
window.onload=function(){
    var config = {
        container:"box",
        width:"1920px",
        height:"600px",
        src:["../img/img1.png","../img/img2.png"]
    };
    new Carousel(config);

};