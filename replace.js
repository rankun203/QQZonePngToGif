var imgsCount = 0;//cache image count

function doReplace() {
  var start = new Date().getTime();
  var imgs = document.getElementsByTagName("img");
  var _imgsCount = imgs.length;
  if(_imgsCount > imgsCount){
    for(var i = 0, j = imgs.length; i < j; i++) {
      var img = imgs[i];
      var src = img.src;
      if(typeof src !== 'undefined') {
        if(src.indexOf("http://qzonestyle.gtimg.cn/qzone/em/e") > -1) {
          img.src = "http://ctc.qzs.qq.com/qzone/em/" + src.match(/\e[\d]+/) + ".gif";
          continue;
        } else if (src.indexOf("http://ctc.qzonestyle.gtimg.cn/qzone/em/e") > -1) {
          img.src = "http://ctc.qzs.qq.com/qzone/em/" + src.match(/\e[\d]+/) + ".gif";
        }
      }

    }

  }

}
setInterval(function(){doReplace();}, 1000);
