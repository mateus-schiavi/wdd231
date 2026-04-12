// js/modal.js

export function openModal(movie, modal, modalTitle, modalContent) {
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
}