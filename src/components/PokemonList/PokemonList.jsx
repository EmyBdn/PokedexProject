import {PokemonCard} from "./PokemonCard/PokemonCard.jsx";
import style from "./PokemonList.module.css";

export function PokemonList({ pokemonList }) {
    return (
        <div className={style.listContainer}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon} />
                ))}
        </div>
    );
}
