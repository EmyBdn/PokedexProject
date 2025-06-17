const baseUrl = import.meta.env.VITE_BASE_URL;
const allPokemons = import.meta.env.VITE_GET_ALL_POKEMONS;


export async function getPokemonList({setPokemonList}) {
    try {
        const response = await fetch(`${baseUrl}${allPokemons}`);
        const data = await response.json();
        setPokemonList(data);
    } catch (error) {
        console.error(error);
    }
}