// js/main.js

import { getMovies } from "./api.js";

export async function initMovies(modal, modalTitle, modalContent, container) {
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

    card.querySelector(".details-btn").addEventListener("click", () => {
      modalTitle.textContent = movie.title;
      modalContent.innerHTML = `
        <p><strong>Year:</strong> ${movie.year}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Duration:</strong> ${movie.duration}</p>
        <p>${movie.description}</p>
      `;
      modal.showModal();
    });

    card.querySelector(".fav-btn").addEventListener("click", () => {
      saveFavorite(movie);
    });

    container.appendChild(card);
  });
}

function saveFavorite(movie) {
  let favs = JSON.parse(localStorage.getItem("favorites")) || [];

  if (!favs.find(f => f.title === movie.title)) {
    favs.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favs));
    alert("Added to favorites!");
  }
}