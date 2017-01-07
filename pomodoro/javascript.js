// JavaScript Document


var start,
		begin,
		timeLeft,
		minutes,
		seconds,
		increase = false,
		amount = 25,
		interval = 5,
		climbOn,
		goingUp,
		isPaused = false,
		newTime;



$(document).ready(function(){
	"use strict";

	$("#set").html(amount);
	$("#time").html(amount + ":00");
	$("#break").html(interval);

	$("#pink").click(function(){
		if(increase === false){
			start = Date.now();
			increase = true;
			begin = setInterval(timer, 1000);
			timer();
		}else{
			if(isPaused === false){
				console.log("test");
				pause();
			}else{
				if(goingUp === false){
					start = Date.now();
					begin = setInterval(timer, 1000);
					timer();
				}
			}
		}
	});

	$("#up").click(function(){
		if(amount > 1 && increase === false){
			amount++;
			$("#set").html(amount);
			$("#time").html(amount + ":00");
		}
	});

	$("#down").click(function(){
		if(amount > 1 && increase === false){
			amount--;
			$("#set").html(amount);
			$("#time").html(amount + ":00");
		}
	});

	$("#up1").click(function(){
		if(amount > 1 && increase === false){
			interval++;
			$("#break").html(interval);
		}
	});

	$("#down1").click(function(){
		if(interval > 1 && increase === false){
			interval--;
			$("#break").html(interval);
		}
	});
});

function timer(){
	"use strict";
	goingUp = false;
	isPaused = false;
	timeLeft = (amount*60) - ((Date.now() - start)/1000);
	minutes = parseInt((timeLeft / 60), 10);
  seconds = parseInt((timeLeft % 60), 10);
	minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
	$("#time").css("font-size", "60px");
	$("#time").html(minutes + ":" + seconds);
	if(minutes === "00" && seconds === "00"){
		clearInterval(begin);
		start = Date.now();
		climb();
		climbOn = setInterval(climb, 1000);
	}
}

function climb(){
	"use strict";
	goingUp = true;
	isPaused = false;
	newTime = (Date.now() - start)/1000;
	minutes = parseInt((newTime / 60), 10);
  seconds = parseInt((newTime % 60), 10);
	minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
	$("#time").html(minutes + ":" + seconds + "^");
	if(minutes === "0" + interval && seconds === "00"){
		clearInterval(climbOn);
		$("#time").css("font-size", "20px");
		$("#time").html("DONE!<br>Click To Run Again");
		increase = false;
		isPaused = false;
		goingUp = false;
	}
}

function pause(){
	"use strict";
	isPaused = true;
	if(goingUp === false){ //then were on timer
		amount = timeLeft/60;
		clearInterval(begin);
	}else{// then were on climb
		clearInterval(climbOn);
	}
}

function reset(){
	location.reload();
}
