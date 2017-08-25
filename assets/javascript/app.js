$(document).ready(function(){

	var sports = ["NBA", "Baseball", "Carolina Panthers", "NHL"];

	function displaySportGifs() {

		var sportVar = $(this).attr("data-name");
		var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=b7c6a08723074e098dcafd64659b7c96&q=" + sportVar +"&limit=15&offset=0&rating=G&lang=en";
		
		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){
			console.log(response);

			var results = response.data;
			for (var m = 0; m < results.length; m++) {
				var sportDiv = $("<div>");
				var p = $("<p>").text("Rated: " + results[m].rating)
				var sportGif = $("<img>"); 

				sportGif.attr("src", results[m].images.fixed_height.url);
				sportDiv.append(p);
				sportDiv.append(sportGif);

				$("#gif-display").prepend(sportDiv);
			}
		}); //.done(function)
	}; //displaySportGifs

	function createButtons() {

		$("#button-display").empty();

		for (var i = 0; i < sports.length; i++) {

			var sb = $("<button>");

			sb.addClass("selectedSport", "btn", "btn-info");
			sb.attr("data-name", sports[i]);
			sb.text(sports[i]);

			$("#button-display").append(sb);
		};

	}; //create buttons

	$("#add-sport").on("click", function(event) {
		event.preventDefault();

		var f = $("#sport-input").val().trim();
		
		sports.push(f);

		createButtons();

	}); //click event

	$(document).on("click", ".selectedSport", displaySportGifs);

		createButtons();

});//Document.ready