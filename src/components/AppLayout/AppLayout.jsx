import {Header} from "../Header/Header.jsx";
import {Outlet} from "react-router";

export function AppLayout() {
    return (
        <div>
            <Header />
            <Outlet/>
        </div>
    )
}