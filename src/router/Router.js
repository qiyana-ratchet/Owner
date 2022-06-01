import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import FirstPage from "../FirstPage";

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element={<FirstPage />} />
        </Routes>
    );
}