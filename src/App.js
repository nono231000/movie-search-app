// Importation des bibliothèques nécessaires et des composants
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import GenreDropdown from "./components/GenreDropdown";
import { fetchMovies } from "./utils/api";

// Composant principal de l'application
const App = () => {
  // State pour stocker la liste des films affichés
  const [movies, setMovies] = useState([]);

  // Fonction pour gérer les résultats de recherche
  const handleSearch = (filteredMovies) => {
    setMovies(filteredMovies); // Mise à jour de la liste des films
  };

  // Fonction pour gérer la sélection d'un genre
  const handleGenreSelect = async (genre) => {
    const allMovies = await fetchMovies(); // Récupération de tous les films
    // Filtrage des films en fonction du genre sélectionné
    const filteredMovies = allMovies.filter((movie) =>
      movie.genres.includes(genre)
    );
    setMovies(filteredMovies); // Mise à jour de la liste des films
  };

  return (
    <div>
      <h1>Recherche de films ADLAB</h1>
      {/* Barre de recherche */}
      <SearchBar onSearch={handleSearch} />
      {/* Liste déroulante pour sélectionner un genre */}
      <GenreDropdown onSelectGenre={handleGenreSelect} />
      {/* Liste des films */}
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
