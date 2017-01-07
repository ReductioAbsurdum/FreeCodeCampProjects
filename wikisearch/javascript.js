// JavaScript Document
$(document).ready(function(){
	"use strict";
	function wikipedia(value){
		$.ajax({
			url:"https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srsearch=" + value + "&srlimit=10&callback=?",
			dataType:"jsonp",
			type: "GET",
			success: function(theApiStuff){
				console.log(theApiStuff);
				var resultsApi = theApiStuff.query.search;  //".search", (array of 10)
				resultsApi.forEach(function(key){
					var title = key.title;
					var summary = key.snippet;
					var urlReady = encodeURIComponent(title);  //encodeURIComponent (removed) adds %20 and formates for URL language
					var urlLink = "https://en.wikipedia.org/wiki/" + urlReady;
					$("#wikis").append("<a href=" + urlLink + " target='_blank'><div class='wikiItem'><h2>" + title + "</h2><p class='summary'>" + summary + "</p></div></a>");
				}); //close for resultsApi.forEach(function(key)
			} //close for success: function
		}); //close for $.ajax
	}  //close for function wikipedia()

	$("#finder").keyup(function(event){
		$("#wikis").empty();
		$("h1").css("margin-top", "10%");
		var value = $("#finder").val();
		if(event.keyCode === 13 && value.length !== 0){   // the event.keycode === 13 is the return key
			wikipedia(value);
			$("h1").css("margin-top", "0px");
		}
	});// close for $("#search-input").keyup(function(event)
}); //close for document ready function
