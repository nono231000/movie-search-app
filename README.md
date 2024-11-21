# ADLAB Movie Search

Ce projet est une application de recherche de films, où l'utilisateur peut rechercher des films par titre ou par genre. Les données des films et des genres sont simulées à partir d'un fichier JSON local dans ce projet. 

## Fonctionnalités

- **Recherche par titre** : Permet de rechercher un film en tapant son nom.
- **Filtrage par genre** : Permet de filtrer les films par genre (ex : Action, Romance).
- **Affichage des films** : Liste des films correspondant aux critères de recherche ou de filtrage, affichant le titre, l'année et le score IMDb.

## Prérequis

- Node.js et npm installés sur votre machine.
- Aucun serveur externe requis, les données sont simulées localement.

## Installation

1. Clonez ce repository :

   git clone <https://github.com/nono231000/movie-search-app>

2. Allez dans le répertoire du projet :

    cd adlab-movie-search

3. Installez les dépendances :

    npm install


## Démarrage
1. Lancez l'application en mode développement :

    npm start
2. Accédez à l'application dans votre navigateur à l'adresse suivante :

    http://localhost:3000


## Structure du projet
Le projet est organisé comme suit :


src/
├── components/           # Composants React : SearchBar, MovieList, GenreDropdown
├── utils/                # Fonctions utilitaires, comme fetchMovies et fetchGenres
├── data/                 # Fichiers JSON simulant les données des films et genres
├── App.js                # Composant principal
├── App.css               # Styles de l'application
├── index.js              # Point d'entrée de l'application React
└── db.json               # Base de données locale des films et genres
