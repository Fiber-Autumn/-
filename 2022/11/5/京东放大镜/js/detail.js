window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
        mask.style.display = 'none';
        big.style.display = 'none';
    })
    preview_img.addEventListener('mousemove', function(e) {
        // Mask移动的距离
        var x = e.pageX - this.offsetLeft - mask.offsetWidth / 2; 
        var y = e.pageY - this.offsetTop - mask.offsetHeight / 2;
        // Mask最大移动的距离
        var maxX = preview_img.offsetWidth - mask.offsetWidth - 2;
        var maxY = preview_img.offsetHeight - mask.offsetHeight - 2;
        if (x <= 0) {
            x = 0;
        } else if (x >= maxX) {
            x = maxX;
        }
        if (y <= 0) {
            y = 0;
        } else if (y >= maxY) {
            y = maxY;
        }
        mask.style.left = x + 'px';
        mask.style.top = y + 'px';
        var bigImg = document.querySelector('.bigImg');
        // 放大图片的移动距离 = 遮挡层移动距离 * 放大图片最大移动距离 / 遮挡层的最大移动距离
        // 放大图片最大移动距离 bigMaxX bigMaxY
        var bigMaxX = bigImg.offsetWidth - big.offsetWidth;
        var bigMaxY = bigImg.offsetHeight - big.offsetHeight;
        // 放大图片的移动距离 bigX bigY
        var bigX = x * bigMaxX / maxX;
        var bigY = y * bigMaxY / maxY;
        bigImg.style.left = -bigX + 'px';
        bigImg.style.top = -bigY + 'px';
    })
})