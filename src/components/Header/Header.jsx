import style from './Header.module.css'
import {CONSTANTS} from "../../constants/constants.jsx";
import {ROUTES} from "../../routes/Routes.jsx";
import {Link} from "react-router";

/**
 * Header
 * Displays the top navigation bar of the application, including the logo and link to the homepage.
 * Remains visible across all pages via the AppLayout.
 */
export function Header() {
    return (
        <div className={style.header}>
            <div className={style.logo}>
                <Link to={ROUTES.HOME} aria-label="Back to home">
                    <img src={CONSTANTS.POKEBALL_ICON} alt="Pokeball icon"/>
                    <img src={CONSTANTS.LOGO} alt="Pokedex logo"/>
                </Link>
            </div>
        </div>
    )
}