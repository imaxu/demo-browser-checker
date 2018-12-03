

function getBrowserName(){
    if(window.ActiveXObject || "ActiveXObject" in window){


    }
    else{
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);"); 
        reIE.test(navigator.userAgent); 
        if(navigator.userAgent.indexOf('MSIE 6.0')!=-1){
            return {"b":"IE6","v":6};
        }
        var v = parseFloat(RegExp["$1"]); 
        if(v == 7) {
            return {"b":"IE7","v":7};
        }
        if(v == 8) {
            return {"b":"IE8","v":8};                    
        }
        if(v == 9) {
            return {"b":"IE9","v":9};
        }
        if(v == 10) {
            return {"b":"IE10","v":10};
        }        
        if(navigator.userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)){
            return {"b":"IE11","v":11};
        }
        if(navigator.userAgent.indexOf("Edge") > -1){
            return {"b":"Edge"};
        }
        if(navigator.userAgent.indexOf("Firefox") > -1){
            return {"b":"Firefox"};
        }
        if(navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Safari") > -1){
            return {"b":"Chrome"};
        }
        if(navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome")==-1){
            return {"b":"Safari"};
        }
    } 
    return {"b":"NaN",v:0 };  
}

$(document).ready(function () {

    var html = [

        '<div id="browserTip" class="browser alert alert-warning alert-dismissible" style="display:none;"  role="alert">',
          '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>',
          '<strong>警告！</strong> 建议在电脑端使用Chrome, Edge, Firefox浏览器进行访问以获得更好的体验。<a href="http://www.google.cn/chrome/browser/" target="_blank">下载谷歌浏览器</a>',
        '</div>'

    ].join("\n");
    var browserName = getBrowserName().b;
    alert(browserName);
    var allows = ["IE11","Chrome","Firefox","Safari","Edge"];

    if($.inArray(browserName,allows) == -1){
        if ($("header").length > 0) {
            $("header").prepend(html);
        } else {
            $("body").prepend(html);
        }
        $("#browserTip").fadeIn(300);        
    }
});
