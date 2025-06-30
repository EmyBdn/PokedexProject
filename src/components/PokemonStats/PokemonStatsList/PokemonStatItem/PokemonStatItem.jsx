import {MAX_STAT} from "../../../../constants/MaxStats.jsx";
import style from "./PokemonStatItem.module.css";

const statKeyMap = {
    "HP": "hp",
    "Attack": "attack",
    "Defense": "defense",
    "Special attack": "specialAttack",
    "Special defense": "specialDefense",
    "Speed": "speed"
};

/**
 * PokemonStatItem
 * Displays a single base stat with its name, value, and a color-coded progress bar.
 */
export function PokemonStatItem({name, value}) {
    const key = statKeyMap[name];
    const max = MAX_STAT[key];
    const percent = Math.round((value / max) * 100);

    const getBarColor = () => {
        if (percent >= 80) return "#388e3c";
        if (percent >= 60) return "#aed581";
        if (percent >= 40) return "#fff176";
        if (percent >= 20) return "#ffb74d";
        return "#f57c00";
    };

    return (
        <div className={style.statItem}>
            <span>{name}</span>
            <div className={style.statsValues}>
                <span>{value}</span>
                <div className={style.statBar}>
                    <div
                        className={style.statProgress}
                        style={{
                            width: `${percent}%`,
                            background: getBarColor()
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
