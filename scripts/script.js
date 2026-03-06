document.getElementById("lastModified").textContent = document.lastModified;

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});