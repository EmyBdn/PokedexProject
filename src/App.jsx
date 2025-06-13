import {BrowserRouter, Route, Routes} from "react-router";
import {ROUTES} from "./routes/Routes.jsx";
import {AppLayout} from "./components/AppLayout/AppLayout.jsx";
import {HomePage} from "./pages/HomePage/HomePage.jsx";
import {Details} from "./pages/Details/Details.jsx";
import {NotFound} from "./pages/NotFound/NotFound.jsx";

export function App() {

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path={ROUTES.HOME} element={<AppLayout/>}>
                        <Route path={ROUTES.HOME} element={<HomePage/>}/>
                        <Route path={ROUTES.DETAILS} element={<Details/>}/>
                    </Route>
                    <Route path={ROUTES.NOTFOUND} element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}