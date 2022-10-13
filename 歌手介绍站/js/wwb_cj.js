// 小游戏
var oInput=document.getElementsByTagName("input");
var oHave=document.getElementById("have");
var oGain1=document.getElementById("gain1");
var oAround=document.getElementById("around");
var oDiv=oAround.getElementsByTagName("div");
var oLi=document.getElementsByTagName("li");
var oApply=document.getElementById("apply");
var oGain=document.getElementById("gain");
var num=0,num1=0,num2=0,num3=0,num4=0,num5=0,num6=0;
var t1;
var i=1;
for(var i=1;i<oLi.length;i++){
	apply(oLi[i]);
};
function apply(o){
	var input=o.getElementsByTagName("input");
	input[0].onclick=function(){
	 	if(parseInt(input[1].value)>0){
	 		input[1].value=parseInt(input[1].value)-1;
			oHave.innerHTML=parseInt(oHave.innerHTML)+1;	
		}
	};
	input[2].onclick=function(){
		if(parseInt(oHave.innerHTML)>0){
			input[1].value=parseInt(input[1].value)+1;
			oHave.innerHTML=parseInt(oHave.innerHTML)-1;
	 	}
	};
}
oApply.onclick=function(){
	clearInterval(t1);
	if(parseInt(oInput[1].value)==0&&parseInt(oInput[4].value)==0
	&&parseInt(oInput[7].value)==0&&parseInt(oInput[10].value)==0
	&&parseInt(oInput[13].value)==0&&parseInt(oInput[16].value)==0){
	 	alert("请先播种!");
	}else{
	 	t1=setInterval(function(){
	 		oDiv[i].style.backgroundColor="#0F0";
	 		oDiv[i-1].style.backgroundColor="#ff0000";
	 		i++;
	 		oDiv[15].style.backgroundColor="#ff0000";
	 		if(i==16){
	 			i=1;
	 			oDiv[15].style.backgroundColor="#0F0";
	 		}
		},15);
	}
};
oGain.onclick=function(){
	clearInterval(t1);
	gain();
	clear();
};
function gain(){
	var quantity1=parseInt(oInput[1].value);
	var quantity2=parseInt(oInput[4].value);
	var quantity3=parseInt(oInput[7].value);
	var quantity4=parseInt(oInput[10].value);
	var quantity5=parseInt(oInput[13].value);
	var quantity6=parseInt(oInput[16].value);
	if(i==3||i==7||i==11||i==15){num1=quantity1*5}
	if(i==5||i==9||i==13||i==17){num2=quantity2*5}
	if(i==4||i==8||i==12||i==16){num3=quantity3*10}
	if(i==6||i==14){num4=quantity4*20}
	if(i==10){num5=quantity5*50}
	if(i==2){num6=quantity6*100}
	num=num1+num2+num3+num4+num5+num6;
	oGain1.innerHTML=num;
	oHave.innerHTML=parseInt(oHave.innerHTML)+num;
}
function clear(){
	for(var i=1; i<18;i=i+3){
		oInput[i].value=0;
	}
}