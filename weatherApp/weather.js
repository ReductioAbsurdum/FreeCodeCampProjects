// JavaScript Document
$(document).ready(function() {
	"use strict";
	if(navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(getWeather);
		navigator.geolocation.getCurrentPosition(function(position) {
			$("h2").html("Your current position: <br>latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
		});
	}
});

function printWeather(name, weather, Wtype, humidity){
	"use strict";
	var Fahr = Math.floor(weather*9/5 -459.67) + "&deg" + " Fahrenheit";
	var Cel = Math.floor(weather - 273.15) + "&deg" + " Celsius";
	var type = [Fahr, Cel];
	var i = 0;
	$("#city").html(name);
	$("#Wtype").html(Wtype);
	$("#humidity").html("humidity: " + humidity + "%");
	$("p").html(type[i]);

	$("p").click(function(){
		if(type[i] === Fahr){
			i++;
		}else{
			i--;
		}
		$("p").fadeOut(300, function(){
			$(this).html(type[i]);
			$("p").fadeIn(600);
		});
	});
}

function changeBackground(temp){
	"use strict";
	if(temp < 280){
		$("body").css("background" , "url(assets/coldB.jpg) no-repeat");
	}
}


function getWeather(position){
	"use strict";
	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var appid = ""; //withheld
	var endpoint = "http://api.openweathermap.org/data/2.5/weather?";
	var url = endpoint + "lat=" + lat + "&lon=" + long + "&APPID=" + appid;

	$.ajax({
		url: url,
		type: "GET",
		dataType: "json",
			success: function (json){
				console.log(json);
				$("#weather").html(JSON.stringify(json));
				printWeather(json.name, json.main.temp, json.weather[0].description, json.main.humidity);
				changeBackground(json.main.temp);
			}
		});
}
