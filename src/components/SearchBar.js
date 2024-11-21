// Importation de React et du hook useState
import React, { useState } from "react";
import { fetchMovies } from "../utils/api";

// Composant pour effectuer une recherche de films par titre
const SearchBar = ({ onSearch }) => {
  // State pour stocker la requête de recherche
  const [query, setQuery] = useState("");

  // Fonction pour gérer la recherche
  const handleSearch = async () => {
    const allMovies = await fetchMovies(); // Récupération de tous les films depuis l'API
    // Filtrage des films en fonction de la requête
    const filteredMovies = allMovies.filter((movie) =>
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    onSearch(filteredMovies); // Mise à jour des résultats dans le composant parent
  };

  return (
    <div>
      {/* Champ de saisie pour entrer la requête */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un film..."
      />
      {/* Bouton pour lancer la recherche */}
      <button onClick={handleSearch}>Recherche</button>
    </div>
  );
};

export default SearchBar;
