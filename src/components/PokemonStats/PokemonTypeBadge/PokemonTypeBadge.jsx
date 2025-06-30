import style from './PokemonTypeBadge.module.css';
import {PKMN_TYPES} from "../../../constants/PokemonTypes.jsx";

/**
 * PokemonTypeBadge
 * Renders a list of type badges for a given Pokemon.
 * Each badge is styled with a specific background color based on the Pokemon's type.
 */
export function PokemonTypeBadge({types}) {
    return (<div className={style.badgeContainer}>
        {types.map(type => {
            const typeData = PKMN_TYPES.find(t => t.name === type.toLowerCase());
            const backgroundColor = typeData ? typeData.color : "#ccc";

            return (<span key={type} className={style.badge} style={{backgroundColor}}>
                        {type}
                    </span>);
        })}
    </div>)
}