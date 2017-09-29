/**
 * Created by Administrator on 2017/9/29.
 */


;(function(win){
    function Mix_img(cfg){
        this.config=cfg;
        this.container=document.getElementById(this.config.container);
        this.render();
    };
    Mix_img.prototype={
        constructor:Mix_img,
        render:function(){
            var that = this;
//                创建图片节点ul li
            var str="";
            var flag=document.createDocumentFragment();
            var ul_=document.createElement("ul");
            ul_.className="img_list";
            ul_.style.width=this.config.ul_width;
            for(var i=0;i<that.config.url1.length;i++){
                str+="<li><img/><p></p></li>"
            }
            ul_.innerHTML=str;
            flag.appendChild(ul_);
            this.container.appendChild(flag);
            var img_list_ul=this.container.getElementsByClassName("img_list")[0];
            var img_src=img_list_ul.getElementsByTagName("img");
            var img_text=img_list_ul.getElementsByTagName("p");

            for(var j=0;j<img_src.length;j++){
                (function(n){
                    img_src[n].setAttribute("src",that.config.url1[n]);
                    img_text[n].innerHTML=that.config.text[n];
                })(j)
            }
            var li=img_list_ul.getElementsByTagName("li");
            for(var m=0;m<li.length;m++){
                li[m].style.cssText="width:"+this.config.width+";"+"height:"+this.config.height;
                li[m].className="img_li";
            }
            var p=img_list_ul.getElementsByTagName("p");
            for(var k=0;k< p.length;k++){
                p[k].className="img_text";
            }
        }
    };

    win["Mix_img"]=Mix_img;
})(window);

var config_M = {
    container:"img_content_M",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/1.png","../img/2.png","../img/3.png","../img/4.png","../img/5.png",
        "../img/6.png","../img/7.png","../img/8.png","../img/9.png","../img/10.png",
        "../img/11.png","../img/12.png","../img/13.png","../img/14.png","../img/15.png",
        "../img/1.png","../img/2.png","../img/3.png","../img/4.png","../img/5.png",
        "../img/6.png","../img/7.png"
    ],
    text:[
        "红米Note 5A","小米MIX 2","小米Note 3","小米手机5s","小米手机5",
        "小米Note 2","红米手机4","红米Note 4X","红米手机4X","小米手机6",
        "小米手机5X","小米手机5s Plus","小米MIX","红米手机4A","小米手机5c",
        "红米Note 5A","小米MIX 2","小米Note 3","小米手机5s","小米手机5",
        "小米Note 2","红米手机4"
    ]

};

var config_G = {
    container:"img_content_G",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/33.png","../img/3.png","../img/31.png","../img/30.png","../img/25.png"
    ],
    text:[
        "Google Galaxy Nexus","Google Nexus 5","Google Nexus S","Galaxy Nexus(CDMA)","Google Nexus 4"
    ]
};

var config_H = {
    container:"img_content_H",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/25.png","../img/26.png","../img/12.png","../img/11.png","../img/19.png"
    ],
    text:[
        "Google Galaxy Nexus","Google Nexus 5","Google Nexus S","Galaxy Nexus(CDMA)","Google Nexus 4"
    ]
};

var config_S = {
    container:"img_content_S",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/23.png","../img/6.png","../img/9.png","../img/13.png","../img/18.png",
        "../img/3.png","../img/4.png","../img/8.png","../img/27.png","../img/4.png",
        "../img/16.png","../img/12.png","../img/15.png"
    ],
    text:[
        "HTC Incredible S","HTC ONE","HTC One(M8)","HTC Desire HD","HTC Touch HD2",
        "HTC Desire 816t","HTC T329T","HTC Rezound","HTC One V","HTC Mytouch 4G",
        "HTC One X","HTC EVO 4G","HTC butterfly dna"
    ]
};
var config_W = {
    container:"img_content_W",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/1.png","../img/3.png","../img/5.png","../img/7.png","../img/8.png",
        "../img/10.png","../img/12.png","../img/15.png","../img/17.png","../img/19.png",
        "../img/23.png","../img/26.png"
    ],
    text:[
        "华为P6（移动）","华为3X(畅玩版)","华为G510","华为 Honor","华为U8800PRO",
        "华为C8815","华为G610T","华为 U8818","华为G700T","华为 Ascend D1",
        "华为G525","华为畅玩4/4X"
    ]
};
var config_MO = {
    container:"img_content_MO",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/23.png","../img/21.png","../img/15.png","../img/18.png"
    ],
    text:[
        "MOTO XT910","MOTO Defy+","MOTO ME860","MOTO Defy"
    ]
};
var config_SA = {
    container:"img_content_SA",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/2.png","../img/3.png","../img/5.png","../img/6.png","../img/8.png","../img/14.png"
    ],
    text:[
        "索爱 LT18i","索尼Xperia Ion","索尼L36h","索尼 Xperia Z1","索爱LT26i","索尼 Xperia Z2"
    ]
};
var config_LG = {
    container:"img_content_LG",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[

        "../img/21.png","../img/22.png","../img/23.png","../img/24.png","../img/25.png",
        "../img/10.png","../img/13.png","../img/14.png","../img/30.png","../img/31.png"
    ],
    text:[
        "LG L01F","LG P760","LG LU6200","LG P880","LG F180",
        "LG P970","LG G Pro","LG F160","LG G3","LG G2 L22"
    ]
};
var config_Z = {
    container:"img_content_Z",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/3.png","../img/4.png","../img/8.png","../img/27.png","../img/4.png",
        "../img/5.png","../img/6.png","../img/27.png","../img/11.png","../img/19.png",
        "../img/22.png","../img/23.png"
    ],
    text:[
        "中兴天机","努比亚Z5S","中兴 U950","中兴 U5","中兴V5",
        "中兴 U930","努比亚Z5S MINI","努比亚Z7 mini","中兴N988","中兴U988s",
        "努比亚Z5","中兴N919"
    ]
};
var config_O = {
    container:"img_content_O",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/23.png","../img/2.png","../img/5.png","../img/7.png","../img/9.png",
        "../img/30.png","../img/27.png","../img/15.png","../img/10.png","../img/8.png"
    ],
    text:[
        "OPPO U707T","天语V9","百分百S7","魅族 MX","天语Touch3",
        "酷派大神F1","泛泰 A900","优米X2","谷峰大赢家","vivo xshot"
    ]
};
var config_Q = {
    container:"img_content_Q",
    width:"180px",  //li的宽高
    height:"300px",
    ul_width:"958px",
    url1:[
        "../img/25.png","../img/26.png","../img/12.png","../img/11.png","../img/19.png"
    ],
    text:[
        "Google Galaxy Nexus","Google Nexus 5","Google Nexus S","Galaxy Nexus(CDMA)","Google Nexus 4"
    ]
};
new Mix_img(config_M);
new Mix_img(config_G);
new Mix_img(config_H);
new Mix_img(config_S);
new Mix_img(config_W);

new Mix_img(config_MO);
new Mix_img(config_SA);
new Mix_img(config_LG);
new Mix_img(config_Z);
new Mix_img(config_O);
new Mix_img(config_Q);



