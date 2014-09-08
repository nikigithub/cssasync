var cb=function(){
var a=document.createElement("link");
a.rel="stylesheet";
a.href="/style.css";

var b=document.getElementsByTagName("head")[0];
b.insertBefore(a,null)};
if(!window.requestAnimationFrame){
  window.requestAnimationFrame=(function(){
    return window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(c,d){window.setTimeout(c,1000/60)}
  })()
}

window.requestAnimationFrame(cb);
