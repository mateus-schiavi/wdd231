// js/storage.js

export function saveFavorite(movie) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    if (!favs.find(f => f.title === movie.title)) {
        favs.push(movie);
        localStorage.setItem("favorites", JSON.stringify(favs));
        alert("Added to favorites!");
    }
}