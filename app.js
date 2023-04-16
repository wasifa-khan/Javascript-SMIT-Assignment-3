// Load movie data from JSON file
let movies = [];

fetch("movies.json")
	.then(response => response.json())
	.then(data => {
		movies = data.movies;
	});

// Define recommendation function
function recommendMovies() {
	// Get user input values
	let genre = document.getElementById("genre").value;
	let rating = document.getElementById("rating").value;
	let year = document.getElementById("year").value;

	// Filter movies based on user preferences
	let filteredMovies = movies.filter(movie => {
		return movie.genre.toLowerCase().includes(genre.toLowerCase())
			&& movie.rating >= rating
			&& movie.releaseYear >= year;
	});

	// Display filtered movies as recommendations
	let recommendationsList = document.getElementById("recommendations");
	recommendationsList.innerHTML = "";
	filteredMovies.forEach(movie => {
		let li = document.createElement("li");
		li.textContent = movie.title;
		recommendationsList.appendChild(li);
	});
}
