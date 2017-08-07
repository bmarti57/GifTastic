var sports = ["NFL", "Baseball", "Denver Nuggets", "NHL"]

function displaySportGifs() {
	var sportVar = $(this).attr("data-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=b7c6a08723074e098dcafd64659b7c96&q=" + sportVar +"&limit=15&offset=0&rating=G&lang=en"

	$.ajax({
		url: queryURL
		method: "GET"
	}).done(function(response){
		
		var sportDiv = $("<div class='sport'>");
		var rating = response.rating;
		var pOne = $("<p>").text("Rated: " + rating);
		
		sportDiv.append(pOne);
		
		var gifURL = response.images.fixed_height_small;
		var gif = $("<img>").attr("src= " + gifURL);
		
		sportDiv.prepend(gif);

		$("#gif-display").prepend(gif);

	}) //.done(function)
} //displaySportGifs

function createButtons() {

	$("#button-display").empty();

	for (var i = 0; i < sports.length; i++) {

		var sportButton = $("<button>");

		sportButton.addClass("selectedSport", "btn-info");
		sportButton.attr("data-name", sports[i]);
		sportButton.text(sports[i]);

		$("button-display").append(sportButton);
	}

} //create buttons

$("#add-sport").on("click", function(event) {
	event.preventDefault();

	var sportVar = $("#sport-input").val().trim();
	sports.push(sportVar);

	createButtons();

}); //click event

$(document).on("click", ".selectedSport", displaySportGifs);

	createButtons();