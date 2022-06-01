import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FirstPage from "../page/FirstPage";

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<FirstPage />} />
        </Routes>
    );
}