const url = "data/members.json";
const container = document.querySelector("#featured-members");

// Fetch data
async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Filter only featured members (example: membership level 2 or 3)
        const featured = data.filter(member => member.membership >= 2);

        // Shuffle and pick 3
        const randomMembers = featured.sort(() => 0.5 - Math.random()).slice(0, 3);

        displayFeatured(randomMembers);

    } catch (error) {
        console.error("Error loading members:", error);
    }
}

// Display cards
function displayFeatured(members) {
    if (!container) return;

    members.forEach(member => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h3>${member.name}</h3>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.phone}</p>
            <p>${member.address}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

// Run only if section exists
if (container) {
    getMembers();
}

//
// FOOTER
//
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

if (year) {
    year.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.textContent = document.lastModified;
}