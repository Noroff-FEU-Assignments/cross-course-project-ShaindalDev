const detailContainer = document.querySelector(".film-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

//console.log(id);

const url = "https://johnsen-codes.no/rainyDaysWP/wp-json/wc/store/products/" + id;

//console.log(url);

async function getMovie() {
    try {
        const response = await fetch(url);
        const details = await response.json();

        console.log(response);
		const movie = details.result;
		console.log(movie);
		document.title = movie.properties.title;
        createHtml(movie);
    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }
}
getMovie();

function createHtml(movie) {
    detailContainer.innerHTML = `<h2>${movie.properties.title}</h2>
								<p>Created: ${movie.properties.created}</p>
								<p>Release Date: ${movie.properties.release_date}</p>
								<h4>Opening Crawl</h4>
								<p>${movie.properties.opening_crawl}</p>`;
}