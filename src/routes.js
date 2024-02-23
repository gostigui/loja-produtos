import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/produtos" Component={Home} />
            </Routes>
        </BrowserRouter>


    )
}
export default AppRoutes