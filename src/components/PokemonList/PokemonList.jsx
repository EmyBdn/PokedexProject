import {PokemonCard} from "./PokemonCard/PokemonCard.jsx";
import style from "./PokemonList.module.css";

/**
 * PokemonList
 * Renders the full list of Pokemon cards, based on filtered or fetched data.
 * Each card links to the details page of the corresponding Pokemon.
 */
export function PokemonList({ pokemonList }) {
    return (
        <div className={style.listContainer}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
        </div>
    );
}
