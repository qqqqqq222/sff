/**
 * Created by lenovo on 2016/9/7.
 */
    window.onload=function() {
        var wrap = document.getElementById("wrap");
        var inner = document.getElementById("inner");
        var spanList = document.getElementById("inner").getElementsByTagName("img");
        var left = document.getElementById("left");
        var right = document.getElementById("right");
        var clickFlag = true;//���������л����λ��ֹ������,Ч���е㲻ͬ
        var time//��Ҫ���������Զ������ļ�ʱ��
        var index = 0;//��¼ÿ�λ���ͼƬ���±�
        var Distance = wrap.offsetWidth;//��ȡչʾ���Ŀ�ȣ���ÿ��ͼƬ�Ŀ��

        function AutoGo() {
            var start = inner.offsetLeft;//��ȡ�ƶ��鵱ǰ��left�Ŀ�ʼ����

            var end = index * Distance * (-1);//��ȡ�ƶ����ƶ����������ꡣ��ͼƬ���Ƶľ���
            console.log(end)

            //���㹫ʽ�����ƶ���������ͼƬʱ��ͼƬ�±�Ϊ2����ͼƬ�Ŀ�Ⱦ��ǿ��leftֵ��
            var change = end - start;//ƫ����   -510 - 0
            var timer;//�ü�ʱ��ΪͼƬ��Ӷ���Ч��
            var t = 0;
            var maxT = 20;//���ڼ���ͼƬ��ƫ������ ֵԽ���ƶ���Խ��(����ʱ����ĸ)


            /*clearInterval(timer);*///������ʱ��ǰ�Ȱ�֮ǰ����
            timer = setInterval(function () {
                /* debugger*/
                t++;
                if (t >= maxT) {//��ͼƬ�����յ�ֹͣ��ʱ��
                    clearInterval(timer);
                    clickFlag = true;//��ͼƬ�����յ�����л�
                }
                inner.style.left = change / maxT * t + start + "px";//ÿ��17�����ÿ��ƶ�
                if (index == spanList.length && t >= maxT) {
                    inner.style.left = 0;
                    index = 0; //��ͼƬ�����һ��ʱ����˲���л��ص�һ�ţ����ڶ�ͬһ��ͼƬ����Ӱ��Ч��
                }
            }, 17);
        }

        //����ͼƬ�Զ����һ����ļ�ʱ��
        time = setInterval(forward, 3000);

        function forward() {
            /*  debugger*/
            index++;
            //��ͼƬ�±굽���һ�Ű�С�껻0
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
        var clickFlag = true;//���������л����λ��ֹ������,Ч���е㲻ͬ
        var time1;//��Ҫ���������Զ������ļ�ʱ��
        var index1 = 0;//��¼ÿ�λ���ͼƬ���±�
        var Distance1 = wrap1.offsetWidth;//��ȡչʾ���Ŀ�ȣ���ÿ��ͼƬ�Ŀ��
        /*
         * offsetwidth:��Ԫ����Ը�Ԫ�ص�ƫ�ƿ�ȡ�����border+padding+width
         * */

        //����ͼƬ�����ĺ���
        function AutoGo1() {
            var start = inner1.offsetLeft;//��ȡ�ƶ��鵱ǰ��left�Ŀ�ʼ����

            var end = index1 * Distance1 * (-1);//��ȡ�ƶ����ƶ����������ꡣ��ͼƬ���Ƶľ���
            console.log(end)

            //���㹫ʽ�����ƶ���������ͼƬʱ��ͼƬ�±�Ϊ2����ͼƬ�Ŀ�Ⱦ��ǿ��leftֵ��
            var change = end - start;//ƫ����   -510 - 0
            var timer;//�ü�ʱ��ΪͼƬ��Ӷ���Ч��
            var t = 0;
            var maxT = 20;//���ڼ���ͼƬ��ƫ������ ֵԽ���ƶ���Խ��(����ʱ����ĸ)


            /*clearInterval(timer);*///������ʱ��ǰ�Ȱ�֮ǰ����
            timer = setInterval(function () {
                /* debugger*/
                t++;
                if (t >= maxT) {//��ͼƬ�����յ�ֹͣ��ʱ��
                    clearInterval(timer);
                    clickFlag = true;//��ͼƬ�����յ�����л�
                }
                inner1.style.left = change / maxT * t + start + "px";//ÿ��17�����ÿ��ƶ�
                if (index1 == spanList1.length-1 && t >= maxT) {
                    inner1.style.left = 0;
                    index1 = 0; //��ͼƬ�����һ��ʱ����˲���л��ص�һ�ţ����ڶ�ͬһ��ͼƬ����Ӱ��Ч��
                }
            }, 17);
        }

        function forward1() {
            /*  debugger*/
            index1++;
            //��ͼƬ�±굽���һ�Ű�С�껻0
            if (index1 > spanList1.length-1) {
                index1 = 0;
            }
            AutoGo1();
        }

        //ͼƬ���󻬶�����
        function backward1() {
            index1--;
            //��ͼƬ�±굽��һ���������ص������ڶ��ţ�
            //leftֵҪ�䵽���һ�ŲŲ�Ӱ�����Ч��
            if (index1 < 0) {
                index1 = spanList1.length-1 - 1;
                inner1.style.left = (index1 + 1) * Distance1 * (-1) + "px";
            }
            AutoGo1();
        }

        //����ÿ����ť�����л�����ӦͼƬ
        for (var i = 0; i < spanList1.length-1; i++) {
            spanList1[i].onclick = function () {
                index1 = this.innerText - 1;
                AutoGo1();
            }
        }
        //���л��¼�
        left.onclick = function () {

            if (clickFlag) {
                backward1();
            }
            clickFlag = false;
        }
        //���л��¼�
        right.onclick = function () {
            if (clickFlag) {
                forward1();
            }
            clickFlag = false;
        }
        //���ҳ�����а�ť״̬��ɫ
        function clear() {
            for (var i = 0; i < spanList1.length-1; i++) {
                spanList1[i].className = "";
            }
        }

        //��Ϊ��������
    }