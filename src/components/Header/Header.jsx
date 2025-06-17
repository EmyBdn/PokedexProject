import style from './Header.module.css'
import {CONSTANTS} from "../../constants/constants.jsx";
import {ROUTES} from "../../routes/Routes.jsx";
import {Link} from "react-router";

export function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Link to={ROUTES.HOME}>
                    <img src={CONSTANTS.POKEBALL_ICON}/>
                    <img src={CONSTANTS.LOGO}/>
                </Link>
            </div>
        </div>
    )
}