// 计算机
var oNum1=document.getElementById("num1");
var oNum2=document.getElementById("num2");
var oOper=document.getElementById("operator");
var oOK=document.getElementById("ok");
var res ="";
oOK.onclick=function(){
	var num1=parseFloat(oNum1.value);
	var num2=parseFloat(oNum2.value);
	var oper=oOper.value;
	if(num1&&num2){
		switch(oper){
			case "+":res=num1+num2;break;
			case "-":res=num1-num2;break;
			case "*":res=num1*num2;break;
			case "/":res=num1/num2;break;
		}
	}else{
		res="请输入不为0的数值";
	}
	document.getElementById('result').value = res;
}