import style from './PokemonCard.module.css';
import {CONSTANTS} from "../../../constants/constants.jsx";
import {ROUTES} from "../../../routes/Routes.jsx";
import {Link} from "react-router";
import { PokemonTypeBadge } from "/src/components/PokemonStats/PokemonTypeBadge/PokemonTypeBadge.jsx";

/**
 * PokemonCard
 * Displays a summary card for a single Pokemon, including its image, name, ID, and types.
 * Clicking the card navigates to the detailed page of the Pokemon.
 */
export function PokemonCard({pokemon}) {
    return (
        <Link to={ROUTES.DETAILS.replace(':id', `${pokemon.id}`)} className={style.cardLink}>
            <div className={style.pokemonCard}>
                <img className={style.illustration}
                     src={`${CONSTANTS.POKEMON_IMG}/${pokemon.id}.svg`}
                     alt={pokemon.name}
                />
                <h3>#{pokemon.id} {pokemon.name}</h3>
                <PokemonTypeBadge types={pokemon.types} />
            </div>
        </Link>
    );
}
