export function filterPokemons(pokemonList, search) {
    const query = search.toLowerCase().trim();

    return pokemonList.filter((pokemon) => {
        const nameMatch = pokemon.name.toLowerCase().includes(query);
        const idMatch = pokemon.id.toString().includes(query);
        const typeMatch = pokemon.types.some((type) =>
            type.toLowerCase().includes(query)
        );

        return nameMatch || idMatch || typeMatch;
    });
}
