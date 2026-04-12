// js/api.js

export async function getMovies() {
    try {
        const response = await fetch("./data/movies.json");

        if (!response.ok) {
            throw new Error("Failed to fetch movies");
        }

        const data = await response.json();
        return data;

    } catch (error) {
        console.error("Error loading movies:", error);
        return [];
    }
}