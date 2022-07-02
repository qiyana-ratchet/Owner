import React from "react";
import {BrowserRouter, Routes, Route, NavLink, Redirect} from "react-router-dom";
import FirstPage from "../page/FirstPage";
import JoinPage from "../page/JoinPage";

export default function Router() {

  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={<FirstPage/>}/>
        <Route exact path='/join' element={<JoinPage/>}/>
      </Routes>
    </div>);
}