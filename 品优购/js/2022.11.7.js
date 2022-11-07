window.addEventListener('load', function() {
    var focus = document.querySelector('.focus');
    var arrowL = document.querySelector('.arrow-l');
    var arrowR = document.querySelector('.arrow-r');
    var focusWidth = focus.offsetWidth; // 获取轮播图展示区域的宽度
    var ul = focus.querySelector('ul');
    var ol = focus.querySelector('.circle');
    var liNum = ul.children.length;
    var num = 0; // 
    var circle = 0; // circle 控制小圆圈的播放
    var flag = true; // 节流阀
    var first = ul.children[0].cloneNode(true); // 克隆第一张图片
    ul.appendChild(first); // 将图片插入到ul标签
    // animate 缓动动画
    function animate(obj, target, callback) { // obj:移动的对象 target：移动的值 callback：回调函数
        clearInterval(obj.timer); // 清除之前的定时器，只保留当前的一个定时器执行
        obj.timer = setInterval(function() {
            var step = (target - obj.offsetLeft) / 10; // step:步长值（图片移动一次的值）;写到定时器的里面 使步长值改为一个慢慢变小的值  步长公式：(目标值 - 现在的位置) / 10
            step = step > 0 ? Math.ceil(step) : Math.floor(step); // 取整
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer); // 停止动画 本质是停止定时器
                callback && callback(); // 回调函数 判断是否有callback（函数）传入 有则执行该函数
                // if (callback) {
                //     callback();
                // }
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 10);
    }
    function circleChange() {
        for (var i = 0; i < liNum; i++) {
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    }
    for (var i = 0; i < liNum; i++) {
        var li = document.createElement('li'); // 创建一个li标签
        li.setAttribute('index', i); // 通过自定义属性 创建索引号
        ol.appendChild(li); // 将li标签插入到ol标签
        li.addEventListener('click', function() {
            for (var i = 0; i < liNum; i++) {
                ol.children[i].className = '';
            }
            this.className = 'current';
            var index = this.getAttribute('index') ;
            num = index;
            circle = index;
            animate(ul, -index * focusWidth);
        });
    }
    ol.children[0].className = 'current';
    arrowR.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == liNum) {
                num = 0;
                ul.style.left = 0;
            }
            num++;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle++;
            if (circle == liNum) { // 改为三元表达式：circle = circle == liNum ? 0 : circle;
                circle = 0;
            }
            circleChange();
        }
    });

    arrowL.addEventListener('click', function() {
        if (flag) {
            flag = false;
            if (num == 0) {
                num = liNum;
                ul.style.left = -liNum * focusWidth + 'px';
            }
            num--;
            animate(ul, -num * focusWidth, function() {
                flag = true;
            });
            circle--;
            if (circle < 0) { // 改为三元表达式：circle = circle < 0 ? liNum-1 : circle;
                circle = liNum-1;
            }
            circleChange();
        }
    });

    var timer = setInterval(function() {
        arrowR.click();
    }, 1800);

    focus.addEventListener('mouseenter', function() {
        arrowL.style.display = 'block';
        arrowR.style.display = 'block';
        clearInterval(timer);
        timer = null;
    });
    focus.addEventListener('mouseleave', function() {
        arrowL.style.display = 'none';
        arrowR.style.display = 'none';
        timer = setInterval(function() {
            arrowR.click();
        }, 1800);
    });
})