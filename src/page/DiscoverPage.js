import React, {useState} from 'react';
import MyPage from "./MyPage";
import mag from "../img/magnifyingGlass.png";
import slide1 from "../img/example/slide01.jpg";
import slide2 from "../img/example/slide02.jpg";
import slide3 from "../img/example/slide03.jpg";
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
                                <li><a href="join"><span>Following</span></a></li>
                                <li><a href="discover"><span>Discover</span></a></li>
                                <li><a href="mainpage"><span>Feeds</span></a></li>
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
            </header>

            {/*<div className="discoverBanner">*/}
            {/*    <img src={discoverBanner} />*/}
            {/*</div>*/}
            <div class="section">
                <input type="radio" name="slide" id="slide01"/>
                <input type="radio" name="slide" id="slide02" checked/>
                <input type="radio" name="slide" id="slide03"/>

                <div class="slidewrap">
                    <ul class="slidelist">
                        <li>
                            <a>
                                <label for="slide03" class="left"></label>
                                <img src={slide1}/>
                                <label for="slide02" class="right"></label>
                            </a>
                        </li>
                        <li>
                            <a>
                                <label for="slide01" class="left"></label>
                                <img src={slide2}/>
                                <label for="slide03" class="right"></label>
                            </a>
                        </li>
                        <li>
                            <a>
                                <label for="slide02" class="left"></label>
                                <img src={slide3}/>
                                <label for="slide01" class="right"></label>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>






        </div>
    )
}

export default DiscoverPage;