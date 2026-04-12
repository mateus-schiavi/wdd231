// js/favorites.js

// MENU
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
});

// CONTAINER
const container = document.getElementById("favorites-container");

function loadFavorites() {
    const favs = JSON.parse(localStorage.getItem("favorites")) || [];

    container.innerHTML = "";

    if (favs.length === 0) {
        container.innerHTML = "<p>No favorites yet.</p>";
        return;
    }

    favs.forEach(movie => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        card.innerHTML = `
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
      <p>${movie.genre}</p>
      <p>⭐ ${movie.rating}</p>
      <button class="remove-btn">❌ Remove</button>
    `;

        // REMOVE FUNCTION
        card.querySelector(".remove-btn").addEventListener("click", () => {
            removeFavorite(movie.title);
        });

        container.appendChild(card);
    });
}

// REMOVE FROM LOCAL STORAGE
function removeFavorite(title) {
    let favs = JSON.parse(localStorage.getItem("favorites")) || [];

    favs = favs.filter(movie => movie.title !== title);

    localStorage.setItem("favorites", JSON.stringify(favs));

    loadFavorites(); // refresh UI
}

// INIT
loadFavorites();