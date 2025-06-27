import {PokemonTypeBadge} from "../PokemonTypeBadge/PokemonTypeBadge.jsx";

export function PokemonStatsList({pokemon}) {
    return (
        <>
            <h1>{pokemon.name}</h1>
            <PokemonTypeBadge types={pokemon.types} />
        </>
    )
}