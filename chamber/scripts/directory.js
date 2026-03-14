const url = "data/members.json";
const cards = document.querySelector("#members");

async function getMembers() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(members) {
    members.forEach(member => {
        
        let card = document.createElement("section");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        cards.appendChild(card);
    });
}

getMembers();

const gridBtn = document.querySelector("#grid");
const listBtn = document.querySelector("#list");

gridBtn.addEventListener("click", () => {
    cards.classList.add("grid");
    cards.classList.remove("list");
});

listBtn.addEventListener("click", () => {
    cards.classList.add("list");
    cards.classList.remove("grid");
});

document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;