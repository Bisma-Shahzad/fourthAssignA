import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../screens/Home";
import Signup from "../screens/Signup";
import Login from "../screens/Login"

function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="signup" element={<Signup />} />
                <Route path="home" element={<Home />} />

            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;