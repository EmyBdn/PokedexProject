import {PokemonTypeBadge} from "../PokemonTypeBadge/PokemonTypeBadge.jsx";

/**
 * PokemonStatsList
 * Renders a list of a Pokemon's base stats as progress bars.
 */
export function PokemonStatsList({ base }) {
    return (
        <>
            <h1>{pokemon.name}</h1>
            <PokemonTypeBadge types={pokemon.types} />
        </>
    )
}