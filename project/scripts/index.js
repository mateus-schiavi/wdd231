
import { getMovies } from "./api.js";

// MENU (hamburger)
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// MODAL
const modal = document.getElementById("movie-modal");
const modalTitle = document.getElementById("modal-title");
const modalInfo = document.getElementById("modal-info");
const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", () => modal.close());

// MOVIES
const container = document.getElementById("movies-container");

async function displayMovies() {
  const movies = await getMovies();

  movies.forEach(movie => {
    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <h3>${movie.title}</h3>
      <p><strong>Year:</strong> ${movie.year}</p>
      <p><strong>Genre:</strong> ${movie.genre}</p>
      <p>⭐ ${movie.rating}</p>
      <button class="details-btn">Details</button>
      <button class="fav-btn">❤️ Favorite</button>
    `;

    // MODAL
    card.querySelector(".details-btn").addEventListener("click", () => {
      modalTitle.textContent = movie.title;
      modalInfo.innerHTML = `
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p>${movie.description}</p>
      `;
      modal.showModal();
    });

    // FAVORITES
    card.querySelector(".fav-btn").addEventListener("click", () => {
      saveFavorite(movie);
    });

    container.appendChild(card);
  });
}

// LOCAL STORAGE
function saveFavorite(movie) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  // avoid duplicates
  if (!favs.find(f => f.title === movie.title)) {
    favs.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites!");
  }
}

// INIT
displayMovies();