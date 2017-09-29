/**
 * Created by Administrator on 2017/9/29.
 */
(function(w){
    function Carousel(cfg){
        this.config = cfg;
        this.container = document.getElementById(this.config.container);
        this.imgSrc = this.config.src;
        this.render();
        this.moving();
        this.timer(cfg);
    }
    Carousel.prototype = {
        constructor:Carousel,
        render:function(){
            this.container.style.width=this.config.width;
            this.container.style.height=this.config.height;
            var tmp_list  = document.createDocumentFragment();
            //生成装载图片的div并根据config设置css样式
            var list = document.createElement("div");
            list.className = "CarouselList";
            list.style.width = parseInt(this.config.width)*this.imgSrc.length+100+"px";
            list.style.height = this.config.height;
            list.style.position = "relative";
            list.style.left = 0;
            //根据获取到的图片数组的长度生成img标签
            var str="";
            for(var i=0;i<this.imgSrc.length;i++){
                str+="<div class='Carousel_bgImg'></div>"
            }
            list.innerHTML = str;
            //生成图片按钮容器
            var btn_list = document.createElement("div");
            btn_list.className = "Carousel_btn_list";
            //将图片按钮添加到图片按钮容器中
            for(var b=0;b<this.imgSrc.length;b++){
                btn_list.appendChild(document.createElement("span")) ;
            }
            tmp_list.appendChild(list);
            tmp_list.appendChild(btn_list);
            //将碎片添加到轮播容器中
            this.container.appendChild(tmp_list);
            //获取到img标签
            var img = document.getElementsByClassName("Carousel_bgImg");
            //为img标签加入src属性
            for(var k=0;k<this.imgSrc.length;k++){
                img[k].style.width = this.config.width;
                img[k].style.height = this.config.height;
                for(var l=0;l<this.imgSrc.length;l++){
                    if(k===l){
                        img[k].style.background = "url('"+this.imgSrc[k]+"') center no-repeat"
                    }
                }
            }
            //获取到图片按钮并给第一个添加on类名
            var btn = document.getElementsByClassName("Carousel_btn_list")[0].getElementsByTagName("span");
            btn[0].className = "Carousel_btn_on";
        },
        moving:function(){
            var list = document.getElementsByClassName("CarouselList");
            var left_val;
            var that = this;
            //获取到图片容器的左值
            for(var i=0;i<list.length;i++){
                left_val = parseInt(list[i].style.left);
            }
            //获取到小按钮容器
            var btn_list = document.getElementsByClassName("Carousel_btn_list");
            //获取到按钮
            for(var k=0;k<btn_list.length;k++){
                var btn = btn_list[k].getElementsByTagName("span");
            }
            //为按钮绑定事件
            for (var e = 0; e < btn.length; e++) {
                (function (n) {
                    btn[n].addEventListener("click", function () {
                        left_val = n * (-parseInt(that.config.width));
                        for(var c=0;c<list.length;c++){
                            list[c].style.left =left_val + "px";
                        }
                        for (var j = 0; j < btn.length; j++) {
                            btn[j].setAttribute("class", "")
                        }
                        btn[n].setAttribute("class", "Carousel_btn_on");
                    })
                })(e)
            }
        },
        //设置定时器
        timer:function(cfg){
            //获取到容器
            var content = this.container;
            //初始化定时器
            content.timer = null;
            //变量获取Carousel.prototype.move中的方法
            var move = Carousel.tool.move;
            //默认设定定时器
            content.timer=setInterval(function(){
                move(cfg,-parseInt(cfg.width),-parseInt(cfg.width),0);
            },4000);
            //鼠标悬浮轮播容器时清除定时器
            content.addEventListener("mouseover",function(){
                clearInterval(content.timer);
            });
            //鼠标移出容器时启用定时器
            content.addEventListener("mouseout",function(){
                content.timer=setInterval(function(){
                    move(cfg,-parseInt(cfg.width),-parseInt(cfg.width),0)
                },4000);
            })
        }
    };
    Carousel.tool = {
        move:function(cfg,speed,terminal,flag){
            //获取到图片容器
            var list = document.getElementsByClassName("CarouselList");
            var left_val;
            //获取到图片容器的左值
            for(var i=0;i<list.length;i++){
                left_val = parseInt(list[i].style.left);
            }
            //获取图片按钮容器
            var btn_list = document.getElementsByClassName("Carousel_btn_list");
            //获取到按钮
            for(var k=0;k<btn_list.length;k++){
                var btn = btn_list[k].getElementsByTagName("span");
            }
            //轮播的判定和运动
            if(left_val===terminal){
                left_val=flag;
            }else{
                left_val += speed;
            }
            //按钮类名的清除与添加
            for(var b=0;b<list.length;b++){
                list[b].style.left=left_val+"px";
            }
            for (var j = 0; j < btn.length; j++) {
                btn[j].setAttribute("class", "")
            }
            btn[Math.abs(left_val/parseInt(cfg.width))].setAttribute("class", "Carousel_btn_on")
        }

    };
    w["Carousel"] = Carousel;
})(window);