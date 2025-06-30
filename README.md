# Pokédex React App

A simple Pokédex web application built with React, allowing users to browse, search, and explore detailed information about the first 151 Pokémon. 
Users can view stats, post reviews, and like their favorite Pokémon.

## Features

- Display of the 151 original Pokémon
- Real-time search by name, ID, or type
- Detailed Pokémon page with:
    - Illustration
    - Stats as progress bars
    - Type badges with color coding
    - Likes
    - User reviews
- Ability to post a review by pressing Enter
- Persistent like count stored in the back-end
- Navigation between Pokémon (previous/next)

## Getting started

1. Clone the repository

```bash
git clone https://github.com/EmyBdn/PokedexProject.git
cd PokedexProject
```

2. Install dependencies

```bash
npm install
npm install react-icons
```

3. Start the development server

```bash
npm run dev
```

The app will be available at : http://localhost:3000

## Back-end API

This app relies on a local REST API (json-server). Make sure the API is running at : http://localhost:3001

You can start it with :

```bash
npx json-server db.json --port 3001
```

## Environment Variables

A `.env` file is already included in the project, so there is no need to create or fill it manually.


## Author

Created as part of a front-end React learning project. Feel free to fork or contribute !
