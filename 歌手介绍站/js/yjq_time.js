/* 时钟 */
var oTime = document.getElementById("time");
function showCurrentTime(){
var today = new Date();
var hours = today.getHours();
hours = hours < 10 ? '0' + hours : hours;
var minutes = today.getMinutes();
minutes = minutes < 10 ? '0' + minutes : minutes;
var seconds = today.getSeconds();
seconds = seconds < 10 ? '0' + seconds : seconds;
var str = hours + ":" + minutes + ":" + seconds;
oTime.innerHTML=str
}
showCurrentTime();
setInterval(showCurrentTime, 1000);