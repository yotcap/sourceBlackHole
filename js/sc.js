// JavaScript Document
var Timer=null;//定时器
var i=1;
	function init(){//初始化加载的内容
			window.clearInterval(Timer);
			//清除定时器
			Timer=window.setInterval("image()",1000);
			//每两秒创建一次定时器，调用image()函数
			
		}
	function image(){//完成图片切换
			i++;
			if(i>5){
				i=1;}//判断是否是最后一张图片
			obj=document.getElementById("Swit");
			//获取对象
			obj.src="pic/index"+i+".jpg";//改变图片
		}
	function stop(){
		window.clearInterval(Timer);
	}
	function goon(){
		Timer=window.setInterval("image()",1000);
		}
function showRight(){
	obj=document.getElementById("DropRight");
	obj.style.display="block";
	}
function hideRight(){
	obj=document.getElementById("DropRight");
	obj.style.display="none";
	}
	function show(){
	obj=document.getElementById("Drop");
	obj.style.display="block";
	}
function hide(){
	obj=document.getElementById("Drop");
	obj.style.display="none";
	}
//others下滑菜单
function menuFix() {
		window.clearInterval(Timer);
			//清除定时器
			Timer=window.setInterval("image()",1000);
			//每两秒创建一次定时器，调用image()
	var sfEls = document.getElementById("s1").getElementsByTagName("li");
 	for (var i=0; i<sfEls.length; i++) {
    	sfEls[i].onmouseover=function() {
           this.className+=(this.className.length>0? " ": "") + "sfhover";
        };
        sfEls[i].onMouseDown=function() {
            this.className+=(this.className.length>0? " ": "") + "sfhover";
        };
        sfEls[i].onMouseUp=function() {
        	this.className+=(this.className.length>0? " ": "") + "sfhover";
        };
        sfEls[i].onmouseout=function() {
        	this.className=this.className.replace(new RegExp("( ?|^)sfhover\\b"), "");
        };
     }
          
}