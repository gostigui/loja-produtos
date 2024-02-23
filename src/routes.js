import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Produto from "./pages/Produto";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/produtos" Component={Home} />
                <Route path="/produtos/:id" element={<Produto />} />
            </Routes>
        </BrowserRouter>


    )
}
export default AppRoutes