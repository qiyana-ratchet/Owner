import styles from '../css/MyPage.css'
import Button from '../component/Button';
import React, {useState} from 'react';
import Ticker from 'react-ticker'
import cat from '../img/cat.jpg'
import profilePic from '../img/Ellipse 12.png'

function MyPage() {


    return (

        <div className="entirePage">
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
                                <li><a href="notif.html"><span>🔍</span></a></li>
                                <li><a href="login.html"><span>Log-in</span></a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <hr/>
            </header>
            <div className="bodyPart">
                <div className="profileBanner">
                    <div className="profilePic">
                        <img src={profilePic}/>

                    </div>
                    <div className="profileLetter">
                        B
                    </div>
                    <div className="profileName">
                        블루비
                    </div>
                    <div className="profileNickname">
                        @Blueb
                    </div>
                </div>
                <hr/>
                <div className="followers">
                    팔로우 20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 팔로워 20
                </div>
                <div className="grid-image">
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>
                    <div className="wishlist">
                        <img src={cat} alt="Image"/>
                    </div>

                </div>
                <hr/>
            </div>

        </div>
    )
}

export default MyPage;