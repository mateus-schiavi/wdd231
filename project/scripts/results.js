const params = new URLSearchParams(window.location.search);

const movie = params.get("movie");
const genre = params.get("genre");
const year = params.get("year");

document.getElementById("result").textContent =
`Movie: ${movie} | Genre: ${genre} | Year: ${year}`;