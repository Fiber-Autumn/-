// 鼠标经过切换图片
window.onload = function () {
    //获取图片
    var img = document.getElementById("two1");
    //鼠标经过图片
    img.onmouseover = function () {
        this.src = "./img/zjl3.jpg"
    }
    //鼠标离开图片
    img.onmouseout = function () {
        this.src = "./img/zjl2.jpg";
    }
}