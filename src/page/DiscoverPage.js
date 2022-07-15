import React, {useState} from 'react';
import MyPage from "./MyPage";
import mag from "../img/magnifyingGlass.png";
import discoverBanner from "../img/DiscoverBanner.png"
import '../css/DiscoverPage.css'


function DiscoverPage() {
    return (
        <div>
            <header className="site-navbar" role="banner">

                <div className="container">
                    <div className="row">
                        <h1 className="site-logo">Owner</h1>
                        <nav className="site-navigation" role="navigation">
                            <ul className="site-menu">
                                <li className="active"><a href="index.html"><span>Home</span></a></li>
                                <li><a href="listings.html"><span>Following</span></a></li>
                                <li><a href="about.html"><span>Discover</span></a></li>
                                <li><a href="blog.html"><span>Feeds</span></a></li>
                                <li><a href="mypage"><span>My</span></a></li>
                            </ul>
                        </nav>
                        <nav className="site-navigation" role="navigation">
                            <ul className="login-menu">
                                <li><a href="notif.html">
                                    <img className="magImg" src={mag}/>
                                </a></li>
                                <li><a href="login.html"><span>Log-in</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr/>
            </header>

            <div className="discoverBanner">
                <img src={discoverBanner} />
            </div>





        </div>
    )
}

export default DiscoverPage;