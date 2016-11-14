/**
 * Created by lenovo on 2016/9/12.
 */
window.onload=function(){
    var center1=document.getElementById('center1');
    var center2=document.getElementById('center2');
    var top1=document.getElementById('top');
    var id1=document.getElementById('id1');
    var li1=document.getElementById('li1');

    id1.onclick=function(){
        center1.style.display='none';
        center2.style.display='block';
        top1.innerHTML="<a>帮助中心 < 新手上路</a>";
    }
    li1.onclick=function(){
        center1.style.display='block';
        center2.style.display='none';
        top1.innerHTML="<a>帮助中心</a>";
    }
}