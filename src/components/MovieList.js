// Importation de React
import React from "react";

// Composant pour afficher une liste de films
const MovieList = ({ movies }) => {
  // Vérification si la liste de films est vide
  if (!movies || !movies.length) {
    return <p>Aucun film trouvé.</p>; // Message par défaut si aucun film
  }

  // Retourne une liste non ordonnée contenant les détails des films
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.title} ({movie.year}) - IMDB: {movie.imdb_score}
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
