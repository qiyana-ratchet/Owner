import React, {useState} from 'react';
import styles from '../css/JoinPage.css'
import mag from "../img/magnifyingGlass.png";


function MenuHeader() {

    return (
        <div>
            <header className="site-navbar" role="banner">

                <div className="container">
                    <div className="row">
                        <h1 className="site-logo">Owner</h1>
                        <nav className="site-navigation" role="navigation">
                            <ul className="site-menu">
                                <li className="active"><a href="index.html"><span>Home</span></a></li>
                                <li><a href="/Owner/join"><span>Following</span></a></li>
                                <li><a href="/Owner/discover"><span>Discover</span></a></li>
                                <li><a href="/Owner/mainpage"><span>Feeds</span></a></li>
                                <li><a href="/Owner/mypage"><span>My</span></a></li>
                            </ul>
                        </nav>
                        <nav className="site-navigation" role="navigation">
                            <ul className="login-menu">
                                <li><a href="notif.html"><span>
                                    <img src={mag} className="magImg"/>
                                </span></a></li>
                                <li><a href="login.html"><span>Log-in</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr/>
            </header>
        </div>
    );
}

export default MenuHeader;
