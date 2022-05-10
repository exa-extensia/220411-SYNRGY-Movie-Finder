async function fetchOMDB() {
	const inputMovie = document.querySelector(".input-movie").value;
	console.log(inputMovie);
	const outputMovie = document.getElementsByClassName("output-movie")[0];

	const url = "http://www.omdbapi.com/?apikey=ed5617c5";
	const inputURL = url + "&t=" + inputMovie;
	console.log(inputURL);

	try {
		fetch(inputURL)
			.then((response) => {
				return response.json();
			})
			.then((result) => {
				outputMovie.innerHTML = `<img src="${result.Poster}">
            <h2 class="movie-title">${result.Title}</h2>
            <h2 class="movie-year">${result.Year}</h2>`;
				console.log(result);
			})
			.catch((err) => {
				console.log(err);
			});
	} catch (error) {
		console.log(error);
	}
}

const clickSearchBtn = document.querySelector(".submit-btn");

clickSearchBtn.addEventListener("click", (e) => {
	e.preventDefault();
	fetchOMDB();
});
