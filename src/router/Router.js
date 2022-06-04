import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FirstPage from "../page/FirstPage";
import JoinPage from "../page/JoinPage";

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<JoinPage></JoinPage>} />
        </Routes>
    );
}