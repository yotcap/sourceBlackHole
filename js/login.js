//login
function open_1(iHeight,iWidth){
		 
		var iWidth;                          //弹出窗口的宽度;
  		var iHeight;						//弹出窗口的高度;
		var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
  		var iLeft = (window.screen.availWidth-10-iWidth)/2; 	   //获得窗口的水平位置;
		var d_1=document.getElementById('d_1');
		d_1.style.display="block";
		d_1.style.top=iTop+"px";
		d_1.style.left=iLeft+"px";
		 document.getElementById('div1').style.display="block";;
		// document.getElementById('btn_login_juge').style.display="none";
		 }
	
	 function Juge(){
		 var user=document.getElementById('user');
		 if(user.value=='cap')
		 	alert('user is cap');
		 }
	function btn_close(){
		// document.getElementById('btn_login_juge').style.display="block";
		 document.getElementById('d_1').style.display="none";
		 document.getElementById('div1').style.display="none";
		 document.getElementById('d_registeri').style.display="none";
		}

//register
 function open_register(iHeight,iWidth){
	    document.getElementById('d_1').style.display="none";
	 	var iWidth;                          //弹出窗口的宽度;
  		var iHeight;						//弹出窗口的高度;
		var iTop = (window.screen.availHeight-30-iHeight)/2;       //获得窗口的垂直位置;
  		var iLeft = (window.screen.availWidth-10-iWidth)/2; 	   //获得窗口的水平位置;
		var d_reg=document.getElementById('d_registeri');
		d_reg.style.display="block";
		d_reg.style.top=iTop+"px";
		d_reg.style.left=iLeft+"px";
		document.getElementById('div1').style.display="block";
		
	 }
function reg_tip_show(){
	document.getElementById('hide_tipi').style.display="block";
	}
function reg_tip_hide(){
	document.getElementById('hide_tipi').style.display="none";
	}
function reg_tip_show1(){
	document.getElementById('hide_tipi1').style.display="block";
	}
function reg_tip_hide1(){
	document.getElementById('hide_tipi1').style.display="none";
	}
function reg_tip_show2(){
	document.getElementById('hide_tipi2').style.display="block";
	}
function reg_tip_hide2(){
	document.getElementById('hide_tipi2').style.display="none";
	}
//email
function reg_tip_error0s(){
	var email= document.getElementById('judge_email').value;
	if(email.indexOf('@') < 0 ){
		document.getElementById('hide_tipi_error0').style.display="block";
		}else {document.getElementById('hide_tipi_error0').style.display="none";}
	}
//user
function reg_tip_error1s(){
	var len=document.getElementById('jude_user').value.length;
	if(len<6){
		document.getElementById('hide_tipi_error1').style.display="block";
		}
	  	else if(len>15){
			document.getElementById('hide_tipi_error1_1').style.display="block";
		}
		else{
		document.getElementById('hide_tipi_error1').style.display="none";
		}
	}
//password
function reg_tip_error2s(){
	var len=document.getElementById('jude_paw').value.length;
	if(len<3){
		document.getElementById('hide_tipi_error2').style.display="block";
		}else{
			document.getElementById('hide_tipi_error2').style.display="none";
			}
	}
function reg_tip_error3s(){
	//document.getElementById('hide_tipi_error3').style.display="block";
	var p1=document.getElementById('jude_paw');
	var p2=document.getElementById('jude_paw1');
	if(p1.value != p2.value){
		document.getElementById('hide_tipi_error3').style.display="block";
		}else{document.getElementById('hide_tipi_error3').style.display="none";}
	}
