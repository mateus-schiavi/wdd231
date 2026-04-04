const places = [
    {
        name: "Max Feffer Park",
        description: "A beatiful and nice park for leisure, sports, biking and skating",
        image: "images/park.webp"
    },
    {
        name: "Magic City",
        description: "A popular and fabulous water park near Suzano",
        image: "images/water-park.webp",
    },
    {
        name: "Suzano Shopping",
        description: "A popular and fabulous shopping center in Suzano City",
        image: "images/suzano-shopping.webp",
    },
    {
        name: "Cidade das Flores Square",
        description: "A local square, with a good environment for meetings",
        image: "images/suzano-square.webp"
    },
    {
        name: "Local theater at Suzano",
        description: "A good place to have fun and watch plays",
        image: "images/theater.webp",
    },
];

const container = document.getElementById("places-container");

places.forEach(place => {
    const card = document.createElement("div");
    card.classList.add("place-card");

    card.innerHTML = `
    <h2>${place.name}</h2>
    <img src="${place.image}" alt="${place.name}" loading="lazy">
    <p>${place.description}</p>
    `;

    container.appendChild(card);
})

const message = document.getElementById("visit-message");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

if (!lastVisit) {
    message.textContent = "Welcome! This is your first visit.";
} else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message.textContent = "Back so soon! Awesome!";
    } else {
        message.textContent = `You last visited ${days} day(s) ago.`;
    }
}

localStorage.setItem("lastVisit", now);

const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("main-nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}