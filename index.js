jQuery(document).ready(function($) {
	    setTimeout(function () {
		$('.f1').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},100);
		setTimeout(function () {
			$('.f2').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},500);
		setTimeout(function () {
			$('.co1').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},1000);
		setTimeout(function () {
			$('.ios1').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},1300);
		setTimeout(function () {
			$('.and1').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},1600);
		setTimeout(function () {
			$('.ff3').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},1600);
		setTimeout(function () {
			$('.ff1').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},1800);
		setTimeout(function () {
			$('.ff2').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},2000);
window.onscroll=function(){
 	var p_h=document.documentElement.scrollTop||document.body.scrollTop;
 	console.log(p_h);
	if (p_h>200) {
		setTimeout(function () {
			$('.fff1').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},100);
		setTimeout(function () {
			$('.fff2').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},500);
		setTimeout(function () {
			$('.fff3').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},800);
		}	
    if (p_h>530) {
		setTimeout(function () {
			$('.ffff1').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},100);
		setTimeout(function () {
			$('.ffff2').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},500);
		setTimeout(function () {
			$('.ffff3').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},800);
		}
	if (p_h>730) {
		setTimeout(function () {
			$('.fffff1').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},100);
		setTimeout(function () {
			$('.fffff2').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},500);
		setTimeout(function () {
			$('.fffff3').css({"transition":"0.5s","transform":"translateX(-200px)","opacity":"1"});
		},800);
		}
	if (p_h>840) {
		setTimeout(function () {
			$('.last1').css({"transition":"0.5s","transform":"translateX(200px)","opacity":"1"});
		},100);
		setTimeout(function () {
			$('.last2').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},300);
		setTimeout(function () {
			$('.last3').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},800);
		setTimeout(function () {
			$('.last4').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},1000);
		setTimeout(function () {
			$('.last5').css({"transition":"0.5s","transform":"scale(1,1)","opacity":"1"});
		},1000);

		}
 }
 $(".ios1").click(function() {
 	
 });
  $(".and1").click(function() {
 	
 });
   $(".last3").click(function() {
 	
 });
    $(".last4").click(function() {
 	
 });
})