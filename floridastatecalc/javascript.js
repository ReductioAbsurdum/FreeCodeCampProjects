// JavaScript Document
$(function(){
	"use strict";
	var scrn = "";
	var output= "";
	var state = true;

	$("#theme").hide();
	$("#pump").hide();

	$(".btn-lg").click(function(){
		var text = $(this).attr("value");

		if(state === false){
			scrn = "";
			state = true;
			$("#pump").hide();
			$("#theme").attr("src", "https://www.youtube.com/embed/zM36mqvEia8?start=50&autoplay=0");
			$("#pump").attr("src", "https://www.youtube.com/embed/AXFE6JXvDAM?modestbranding=1&autoplay=0");
			$("img").show();
		}
		if(text === "="){
			$("#theme").attr("src", "https://www.youtube.com/embed/zM36mqvEia8?start=50&autoplay=1");
			output = eval(scrn);
			if(/\./.test(output)){
				output = Math.round(output*100)/100;
			}
			if(output === 5){
				output = "Jamis Winston: Number 5";
			}
			if(output === 3){
				output = "FSU championships?... 3!";
			}
			if(output === 1){
				output = "FSU is No. 1!";
			}
			if(output === 2016){
				$("#theme").attr("src", "https://www.youtube.com/embed/zM36mqvEia8?start=50&autoplay=0");
				$("img").hide();
				$("#pump").show();
				$("#pump").attr("src", "https://www.youtube.com/embed/AXFE6JXvDAM?modestbranding=1&autoplay=1");
				output = "Prepare for 2016 season!";
			}
			text = output;
			scrn = "";
			state = false;
		}

	if(text === "AC"){
		text = "";
		scrn = "";
		$(".text").attr("placeholder", "Go Seminoles!");
	}
	if(text === "Ans"){
		text = output;
		scrn = "";
		}
	if(text === "CE"){
		text = "";
		scrn = scrn.slice(0, -1);
		}

	scrn += text;
	$(".text").val(scrn);
	});

});
