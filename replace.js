function doReplace() {
  console.log("Start replace static emotions.");
  var start = new Date().getTime();
  var imgs = document.getElementsByTagName("img");
  for(var i = 0, j = imgs.length; i < j; i++) {
    var img = imgs[i];
    var src = img.src;
    if(typeof src !== 'undefined') {
      if(src.indexOf("http://qzonestyle.gtimg.cn/qzone/em/") > -1) {
        img.src = "http://ctc.qzs.qq.com/qzone/em/" + src.match(/\e[\d]+/) + ".gif";
        continue;
      } else if (src.indexOf("http://ctc.qzonestyle.gtimg.cn/qzone/em/") > -1) {
        img.src = "http://ctc.qzs.qq.com/qzone/em/" + src.match(/\e[\d]+/) + ".gif";
      }
    }
  }
  console.log("Replace takes: " + ((new Date().getTime()) - start) + "ms");
}
setInterval(function(){doReplace();}, 5000);
