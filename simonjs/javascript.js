// JavaScript Document
$(document).ready(function(){
	"use strict";
	var arrG = [];
	var arrP = [];
	var going = false;
	var level = "--";
	var turn;
	var thePlay;
	var correct = true;
	var strict = false;
		$("#screen").val(level);
			var badding = new Audio();
			badding.src = 'uterror.wav';

		//click use strict
		$("#strict-box").click(function(){
			if(strict === false){
				$("#strict-btn").css("margin", "2px 0px 0px 16px");
				strict = true;
			}else if(strict === true){
				$("#strict-btn").css("margin", "2px 0px 0px -12px");
				strict = false;
			}
		});

		//click Start!
		$("#start").click(function(){
			arrG = [];
			arrP = [];
			going = true;
			level = 1;
			turn = 0;
			clearInterval(thePlay);
			//Intro to game
			$("#red").css("background-color", "pink");
		  	setTimeout(function() {
        	$("#red").css("background-color", "red");
    	}, 800);
			$("#yellow").css("background-color", "lightyellow");
		  	setTimeout(function() {
        $("#yellow").css('background-color', "yellow");
    	}, 800);
			$("#blue").css("background-color", "lightblue");
		  	setTimeout(function() {
        $("#blue").css('background-color', "blue");
    	}, 800);
			$("#green").css("background-color", "lightgreen");
		  	setTimeout(function() {
        $("#green").css('background-color', "green");
    	}, 800);
			//end intro to game
			newAdd();
			setTimeout(function() {thePlay = setInterval(arrGPlay, 850);}, 1000);
		});

	//click color button
	$(".colorBtn").click(function(){
		if(going){
			switch(this.id){
				case "red":
					$("#red").css("background-color", "pink");
		  		setTimeout(function() {
        		$("#red").css("background-color", "red");
    			}, 500);
					$("#soundOne")[0].cloneNode(true).play();
					arrP.push(0);
				break;
				case "yellow":
					$("#yellow").css("background-color", "lightyellow");
		  			setTimeout(function() {
        			$("#yellow").css('background-color', "yellow");
    				}, 500);
					$("#soundTwo")[0].cloneNode(true).play();
					arrP.push(1);
				break;
				case "blue":
					$("#blue").css("background-color", "lightblue");
		  			setTimeout(function() {
        		$("#blue").css('background-color', "blue");
    			}, 500);
					$("#soundThree")[0].cloneNode(true).play();
					arrP.push(2);
				break;
				case "green":
					$("#green").css("background-color", "lightgreen");
		  			setTimeout(function() {
        			$("#green").css('background-color', "green");
    				}, 500);
					$("#soundFour")[0].cloneNode(true).play();
					arrP.push(3);
				break;
			}

			for(var i = 0; i < arrP.length; i++){
				if(arrG[i] !== arrP[i]){
					correct = false;
				}
			}
			if(correct === false){
				arrP = [];
				turn = 0;
				going = true;
				correct = true;
				badding.play();
				//Intro to game
				$("#red").css("background-color", "pink");
			  	setTimeout(function() {
		      	$("#red").css("background-color", "red");
		  		}, 800);
				$("#yellow").css("background-color", "lightyellow");
			  	setTimeout(function() {
		      	$("#yellow").css("background-color", "yellow");
		  		}, 800);
				$("#blue").css("background-color", "lightblue");
			  	setTimeout(function() {
		      	$("#blue").css("background-color", "blue");
		  		}, 800);
				$("#green").css("background-color", "lightgreen");
			  	setTimeout(function() {
		      	$("#green").css("background-color", "green");
		  		}, 800);

				//end intro to game
				if(strict === true){
					arrG = [];
					level = 1;
					newAdd();
					turn = 0;
					setTimeout(function() {thePlay = setInterval(arrGPlay, 850);}, 1000);
				}else{
					turn = 0;
					setTimeout(function() {thePlay = setInterval(arrGPlay, 850);}, 1000);
				}
			}else if(arrG.length === arrP.length){
				if(level === 20){
					win();
				}else{
					arrP = [];
					newAdd();
					level++;
					turn = 0;
					setTimeout(function() {thePlay = setInterval(arrGPlay, 850);}, 1000);
				}
			}
		}
});

function arrGPlay(){
	$("#screen").val(level);
		if(arrG[turn] === 0){
			$("#red").css("background-color", "pink");
			$("#soundOne")[0].cloneNode(true).play();
	  	setTimeout(function() {
      $("#red").css('background-color', "red");
  	}, 500);
	}else if(arrG[turn] === 1){
		$("#yellow").css("background-color", "lightyellow");
		$("#soundTwo")[0].cloneNode(true).play();
	  setTimeout(function() {
      $("#yellow").css('background-color', "yellow");
  	}, 500);
	}else if(arrG[turn] === 2){
		$("#blue").css("background-color", "lightblue");
		$("#soundThree")[0].cloneNode(true).play();
	  setTimeout(function() {
      $("#blue").css('background-color', "blue");
  	}, 500);
	}else{
		$("#green").css("background-color", "lightgreen");
		$("#soundFour")[0].cloneNode(true).play();
	  setTimeout(function() {
      $("#green").css('background-color', "green");
  	}, 500);
	}

	turn++;
	if(arrG.length === turn){
		clearInterval(thePlay);
	}
}

	function newAdd(){
		var ranN = Math.floor((Math.random() * 4));
		arrG.push(ranN);
		console.log("new random number added= [" + arrG + "]");
	}

	function win(){
		$("#screen").val("WIN!!");
		$("#red").css("background-color", "pink");
		setTimeout(function(){$("#red").css("background-color", "red");}, 800);
		setTimeout(function(){$("#yellow").css("background-color", "lightyellow");}, 800);
    setTimeout(function(){$("#yellow").css("background-color", "yellow");}, 1600);
		setTimeout(function(){$("#blue").css("background-color", "lightblue");}, 1600);
		setTimeout(function(){$("#blue").css("background-color", "blue");}, 2400);
		setTimeout(function(){$("#green").css("background-color", "lightgreen");}, 2400);
		setTimeout(function(){$("#green").css("background-color", "green");}, 3200);
	}

});
