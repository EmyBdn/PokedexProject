import {Header} from "../Header/Header.jsx";
import {Outlet} from "react-router";
import style from "./AppLayout.module.css";

/**
 * AppLayout
 * Defines the global layout of the application.
 */

export function AppLayout() {
    return (
        <div className={style.layout}>
            <Header />
            <Outlet className={style.mainContent}/>
        </div>
    )
}