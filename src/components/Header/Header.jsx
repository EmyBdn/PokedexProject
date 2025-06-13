import style from './Header.module.css'
import {CONSTANTS} from "../../constants/constants.jsx";

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <img src={CONSTANTS.POKEBALL_ICON}/>
                <img src={CONSTANTS.LOGO}/>
            </div>
        </div>
    )
}