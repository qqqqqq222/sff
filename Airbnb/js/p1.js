/**
 * Created by lenovo on 2016/9/7.
 */
    window.onload=function() {
        var wrap = document.getElementById("wrap");
        var inner = document.getElementById("inner");
        var spanList = document.getElementById("inner").getElementsByTagName("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var clickFlag = true;//设置左右切换标记位防止连续按,效果有点不同
        var time//主要用来设置自动滑动的计时器
        var index = 0;//记录每次滑动图片的下标
        var Distance = wrap.offsetWidth;//获取展示区的宽度，即每张图片的宽度

        function AutoGo() {
            var start = inner.offsetLeft;//获取移动块当前的left的开始坐标

            var end = index * Distance * (-1);//获取移动块移动结束的坐标。即图片左移的距离
            console.log(end)

            //计算公式即当移动到第三张图片时，图片下标为2乘以图片的宽度就是块的left值。
            var change = end - start;//偏移量   -510 - 0
            var timer;//用计时器为图片添加动画效果
            var t = 0;
            var maxT = 20;//用于计算图片的偏移量： 值越大移动的越慢(计算时做分母)


            /*clearInterval(timer);*///开启计时器前先把之前的清
            timer = setInterval(function () {
                /* debugger*/
                t++;
                if (t >= maxT) {//当图片到达终点停止计时器
                    clearInterval(timer);
                    clickFlag = true;//当图片到达终点才能切换
                }
                inner.style.left = change / maxT * t + start + "px";//每个17毫秒让块移动
                if (index == spanList.length && t >= maxT) {
                    inner.style.left = 0;
                    index = 0; //当图片到最后一张时把它瞬间切换回第一张，由于都同一张图片不会影响效果
                }
            }, 17);
        }

        //开启图片自动向右滑动的计时器
        time = setInterval(forward, 3000);

        function forward() {
            /*  debugger*/
            index++;
            //当图片下标到最后一张把小标换0
            if (index > spanList.length) {
                index = 0;
            }
            AutoGo();
        }

        function clear() {
            for (var i = 0; i < spanList.length; i++) {
                spanList[i].className = "";
            }
        }


        var wrap1 = document.getElementById("wrap1");
        var inner1 = document.getElementById("inner1");
        var spanList1 = document.getElementById("inner1").getElementsByTagName("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var clickFlag = true;//设置左右切换标记位防止连续按,效果有点不同
        var time1;//主要用来设置自动滑动的计时器
        var index1 = 0;//记录每次滑动图片的下标
        var Distance1 = wrap1.offsetWidth;//获取展示区的宽度，即每张图片的宽度
        /*
         * offsetwidth:是元素相对父元素的偏移宽度。等于border+padding+width
         * */

        //定义图片滑动的函数
        function AutoGo1() {
            var start = inner1.offsetLeft;//获取移动块当前的left的开始坐标

            var end = index1 * Distance1 * (-1);//获取移动块移动结束的坐标。即图片左移的距离
            console.log(end)

            //计算公式即当移动到第三张图片时，图片下标为2乘以图片的宽度就是块的left值。
            var change = end - start;//偏移量   -510 - 0
            var timer;//用计时器为图片添加动画效果
            var t = 0;
            var maxT = 20;//用于计算图片的偏移量： 值越大移动的越慢(计算时做分母)


            /*clearInterval(timer);*///开启计时器前先把之前的清
            timer = setInterval(function () {
                /* debugger*/
                t++;
                if (t >= maxT) {//当图片到达终点停止计时器
                    clearInterval(timer);
                    clickFlag = true;//当图片到达终点才能切换
                }
                inner1.style.left = change / maxT * t + start + "px";//每个17毫秒让块移动
                if (index1 == spanList1.length-1 && t >= maxT) {
                    inner1.style.left = 0;
                    index1 = 0; //当图片到最后一张时把它瞬间切换回第一张，由于都同一张图片不会影响效果
                }
            }, 17);
        }

        function forward1() {
            /*  debugger*/
            index1++;
            //当图片下标到最后一张把小标换0
            if (index1 > spanList1.length-1) {
                index1 = 0;
            }
            AutoGo1();
        }

        //图片向左滑动函数
        function backward1() {
            index1--;
            //当图片下标到第一张让它返回到倒数第二张，
            //left值要变到最后一张才不影响过渡效果
            if (index1 < 0) {
                index1 = spanList1.length-1 - 1;
                inner1.style.left = (index1 + 1) * Distance1 * (-1) + "px";
            }
            AutoGo1();
        }

        //遍历每个按钮让其切换到对应图片
        for (var i = 0; i < spanList1.length-1; i++) {
            spanList1[i].onclick = function () {
                index1 = this.innerText - 1;
                AutoGo1();
            }
        }
        //左切换事件
        left.onclick = function () {

            if (clickFlag) {
                backward1();
            }
            clickFlag = false;
        }
        //右切换事件
        right.onclick = function () {
            if (clickFlag) {
                forward1();
            }
            clickFlag = false;
        }
        //清除页面所有按钮状态颜色
        function clear() {
            for (var i = 0; i < spanList1.length-1; i++) {
                spanList1[i].className = "";
            }
        }

        //成为房东下拉
    }