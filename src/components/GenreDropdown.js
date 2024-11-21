// Importation des bibliothèques nécessaires
import React, { useState, useEffect } from "react";
import { fetchGenres } from "../utils/api";

// Composant qui affiche une liste déroulante pour sélectionner un genre de film
const GenreDropdown = ({ onSelectGenre }) => {
  // State pour stocker les genres récupérés depuis l'API
  const [genres, setGenres] = useState([]);

  // Utilisation de useEffect pour récupérer les genres au montage du composant
  useEffect(() => {
    const loadGenres = async () => {
      const data = await fetchGenres(); // Appel de l'API pour obtenir les genres
      setGenres(data); // Mise à jour du state avec les genres récupérés
    };
    loadGenres(); // Appel de la fonction asynchrone
  }, []); // Dépendances vides pour exécuter une seule fois au montage

  return (
    <select onChange={(e) => onSelectGenre(e.target.value)}>
      <option value="">Sélectionner le genre</option>
      {/* Parcours des genres pour les afficher comme options */}
      {genres.map((genre) => (
        <option key={genre.id} value={genre.name}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;
