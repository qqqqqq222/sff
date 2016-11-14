function stopBubble(e){var evt=e||window.event;if(evt.stopPropagation){evt.stopPropagation();}else{evt.cancelBubble=true;}}
function mCalendar(cObj,nMinY,nMaxY,cStylePath) {this.object=cObj;this.minYear=nMinY.toString().search(/^\d{4}$/)<0?2000:nMinY;this.maxYear=nMaxY.toString().search(/^\d{4}$/)<0?2050:nMaxY;if (this.maxYear<this.minYear){var nTmp_min=this.maxYear;this.maxYear=this.minYear;this.minYear=nTmp_min;}else if (this.maxYear==this.minYear){this.minYear-=50;}var oHead=document.getElementsByTagName('head')[0];var newStyle;for (var i=0;i<oHead.getElementsByTagName('link').length;i++){if (oHead.getElementsByTagName('link')[i].href==cStylePath){var newStyle=true;break;}}if (!newStyle) {newStyle=document.createElement('link');newStyle.type='text/css';newStyle.rel='stylesheet';newStyle.href=cStylePath;oHead.appendChild(newStyle);}}
mCalendar.prototype={
    Create:function(oObj,event){Date.prototype.getMYear=function(){return this.getYear()<2000?this.getYear()+1900:this.getYear();};var _this=this;oObj.style.cssText='padding: 1px 3px;background:#fff;width:190px;height:40px;font-size:17px;border:1px solid #C4C4C4;color:#757575';oObj.onclick=function(event){stopBubble(event);if(_this.target){_this.Clear();};var oDiv=document.createElement('div');oDiv.onclick=function(event){stopBubble(event);};oDiv.className='calendar';oDiv.style.left=oObj.getBoundingClientRect().left+'px';oDiv.style.top=oObj.getBoundingClientRect().top+'9000px';document.body.appendChild(oDiv);document.body.appendChild(oDiv);document.documentElement.onclick=function(){_this.Clear();};oObj.blur();oDiv.focus();if((!oObj.value)||(oObj.value.search(/^(\d{4})-(0?[1-9]||1[0-2])-(0?[1-9]||[1-2][0-9]||3[0-1])$/)<0)){oObj.value='2016-09-01';}var aDate=oObj.value.split('-');_this.source=oObj;_this.target=oDiv;_this.current=new Date(aDate[0],aDate[1]-1,aDate[2]);_this.setCale(aDate[0],aDate[1]-1,aDate[2]);if(oDiv.offsetTop+oDiv.offsetHeight>parent.document.documentElement.clientHeight){oDiv.style.top='6px';}};oObj.onfocus=Function('this.click()');},
    Clear:function(){document.body.removeChild(this.target);document.documentElement.onclick=null;this.target=null;},
    setValue:function(cDate) {var aDate=cDate.split('-');var cRel='';for(var i in aDate){cTmp=aDate[i].length<2?'0'+aDate[i]:aDate[i];cRel=cRel+cTmp+'-';}(this.source).value=cRel.substr(0,cRel.length-1);this.Clear();},
    About:function(){alert('Version\t:  '+this.version+'\t\nAuthor\t:  '+this.author+'\t\nE-mail\t:  '+this.email+'\t\nWeb\t:  '+this.web+'\t');},
    setCale:function(dYear,dMonth,dDay){if(dDay>30){dDay=(new Date(dYear,dMonth+1,0)).getDate();};(this.target).innerHTML=this.main(dYear,dMonth,dDay);},
    main:function(dYear,dMonth,dDay){var dDate=new Date(dYear,dMonth,dDay);var dNow=new Date();var dTmp=new Date(dDate.getMYear(),dDate.getMonth()+1,0);var nAllDay=dTmp.getDate();var nStart=1-(new Date(dYear,dMonth,1)).getDay();var cReHtml;
        cReHtml='<div class="caleTit"></div><button type="button" title="上一年" onclick="'+this.object+'.setCale('+(dDate.getMYear()-1)+','+dDate.getMonth()+','+dDate.getDate()+');">&laquo;</button><button type="button" title="上一月" onclick="'+this.object+'.setCale('+dDate.getMYear()+','+(dDate.getMonth()-1)+','+dDate.getDate()+');">&lsaquo;</button><select name="year" onchange="'+this.object+'.setCale(this.options[this.selectedIndex].value,'+dDate.getMonth()+','+dDate.getDate()+');">';
        for(var i=(this.maxYear-this.minYear+1);i>0;i--){var cTmp=dNow.getMYear()+i-(dNow.getMYear()-this.minYear+1);cReHtml+='<option value="'+cTmp+'"';if(cTmp==dDate.getMYear()){cReHtml+=' selected="selected"';}cReHtml+='>'+cTmp+'年</option>'}
        cReHtml+='</select><select name="month" onchange="'+this.object+'.setCale('+dDate.getMYear()+',this.options[this.selectedIndex].value,'+dDate.getDate()+');">';
        for(var i=0;i<12;i++){cReHtml+='<option value="'+i+'"';if(i==dDate.getMonth()){cReHtml+=' selected="selected"';}cReHtml+='>'+(i+1)+'月</option>';}
        cReHtml+='</select><button type="button" title="下一月" onclick="'+this.object+'.setCale('+dDate.getMYear()+','+(dDate.getMonth()+1)+','+dDate.getDate()+');">&rsaquo;</button><button type="button" title="下一年" onclick="'+this.object+'.setCale('+(dDate.getMYear()+1)+','+dDate.getMonth()+','+dDate.getDate()+');">&raquo;</button>';cReHtml+='<table><tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr><tr>';
        for(var i=nStart;i<=nAllDay;i++){if(i<1){cReHtml+='<td></td>';}else{cReHtml+='<td class="';if((i==this.current.getDate())&&(this.current.getMYear()==dDate.getMYear())&&(this.current.getMonth()==dDate.getMonth())){cReHtml+='onday ';}if((i==dNow.getDate())&&(dNow.getMYear()==dDate.getMYear())&&(dNow.getMonth()==dDate.getMonth())){cReHtml+='today';}cReHtml+='"><a href="javascript:void(0);" onclick="'+this.object+'.setValue(\''+dDate.getMYear()+'-'+(dDate.getMonth()+1)+'-'+i+'\');" title="'+dDate.getMYear()+'-'+(dDate.getMonth()+1)+'-'+i+'">'+i+'</a></td>';}if((i-nStart+1)%7==0){cReHtml+='</tr><tr>';}}if((nAllDay-nStart+1)%7!=0){for (var i=1;i<=7-(nAllDay-nStart+1)%7;i++){cReHtml+='<td></td>';}cReHtml+='</tr>';}else {cReHtml=cReHtml.substr(0,cReHtml.length-4);}
        cReHtml+='</table><button type="button" class="opbtn" onclick="'+this.object+'.setCale('+dNow.getMYear()+','+dNow.getMonth()+','+dNow.getDate()+');">返回本月</button><button typte="button" class="opbtn thisday" onclick="'+this.object+'.setValue(\''+dNow.getMYear()+'-'+(dNow.getMonth()+1)+'-'+dNow.getDate()+'\');">选择今天</button>';return cReHtml;
    }
}
window.onload=function(){
    //checkbox筛选
    var checked=document.getElementsByClassName('div4');
    var checkbox=document.getElementsByClassName('img5');
    for(var i=0;i<checked.length;i++){
        checked[i].index=i;
        checked[i].onmousedown=function(){
            tab2(this.index)
        }
        function tab2(newindex){
            for(var j=0;j<checkbox.length;j++){
                if(newindex==j){
                    checkbox[j].style.display='block';
                }
            }
        }
    }

    //鼠标滑动到图片，箭头出现
    var left=document.getElementsByClassName('left');
    var right=document.getElementsByClassName('right');
    var pic=document.getElementsByClassName('pic');
    for(var i=0;i<pic.length;i++){
        pic[i].index=i;
        pic[i].onmouseover=function(){
            tab(this.index);
        }
        function tab(newindex){
            for(var j=0;j<right.length;j++){
                if(newindex==j){
                    left[i].style.visibility='visible';
                    right[i].style.visibility='visible';
                }else{
                    left[i].style.visibility='hidden';
                    right[i].style.visibility='hidden';
                }
            }


        }
    }
    }
