//倒计时
window.onload=function(){
	setInterval(show,1000);
	function show(){
		var aInput=document.getElementsByTagName("input");
		var today=new Date();
		var Endtime=new Date("2022/03/12,00:00:00");
		var now=today.getTime();
		var end=Endtime.getTime();
		var t=Endtime.getTime()-today.getTime();
		var seconds=Math.floor(t/1000);
		var day=Math.floor(seconds/60/60/24);
		var h=Math.floor(seconds/60/60%24);
		var m=Math.floor(seconds/60%60);
		var s=seconds%60;
		aInput[0].value=Math.floor(day/10);
		aInput[1].value=day%10;
		aInput[2].value=Math.floor(h/10);
		aInput[3].value=h%10;
		aInput[4].value=Math.floor(m/10);
		aInput[5].value=m%10;
		aInput[6].value=Math.floor(s/10);
		aInput[7].value=s%10;
	}
}