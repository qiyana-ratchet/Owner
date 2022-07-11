import React from "react";
import {BrowserRouter, Routes, Route, NavLink, Redirect} from "react-router-dom";
import FirstPage from "../page/FirstPage";
import JoinPage from "../page/JoinPage";
import MainPage from "../page/MainPage";
import MyPage from "../page/MyPage";

export default function Router() {

    return (
        <div>
            <Routes>
                <Route exact path='/' element={<FirstPage/>}/>
                <Route exact path='/join' element={<JoinPage/>}/>
                <Route exact path='/mainpage' element={<MainPage/>}/>
                <Route exact path='/mypage' element={<MyPage/>}/>
            </Routes>
        </div>);
}