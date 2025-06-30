import {PokemonStatItem} from "./PokemonStatItem/PokemonStatItem.jsx";
import style from "./PokemonStatsList.module.css"

/**
 * PokemonStatsList
 * Renders a list of a Pokemon's base stats as progress bars.
 */
export function PokemonStatsList({ base }) {
    return (
        <div className={style.statsList}>
            {Object.entries(base).map(([statName, value]) => (
                <PokemonStatItem
                    key={statName}
                    name={statName}
                    value={value}
                />
            ))}
        </div>
    );
}
