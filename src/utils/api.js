// Importation des données simulées
import titlesData from "../data/titles.json";
import genresData from "../data/genres.json";

// Simulation de la récupération des films
export const fetchMovies = async (params = "") => {
    try {
        // Ajout de la logique pour simuler des paramètres de requête
        if (params) {
            const query = new URLSearchParams(params);
            const searchTitle = query.get("title_contains");

            if (searchTitle) {
                // Filtrer les films par titre
                return titlesData.results.filter(movie =>
                    movie.title.toLowerCase().includes(searchTitle.toLowerCase())
                );
            }
        }
        return titlesData.results; // Retourne tous les films par défaut
    } catch (error) {
        throw new Error("Erreur lors de la récupération des données.");
    }
};

// Simulation de la récupération des genres
export const fetchGenres = async () => {
    try {
        return genresData.results;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des genres.");
    }
};
