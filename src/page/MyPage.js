import styles from '../css/MyPage.css'
import Button from '../component/Button';
import React, {useState} from 'react';
import  '../css/JoinPage.css'
import bannerStyles from '../css/JoinPage.module.css'
import Ticker from 'react-ticker'
import cat from '../img/cat.jpg'
import cat2 from '../img/cat2.jpg'
import cat3 from '../img/cat3.jpg'
import cover1 from '../img/cover1.png'
import cover2 from '../img/cover2.png'
import cover3 from '../img/cover3.png'
import profilePic from '../img/Ellipse 12.png'
import mag from "../img/magnifyingGlass.png";
import MenuHeader from "../component/MenuHeader";

function MyPage() {


    return (
        //TODO : 상단바, 위시리스트 모듈화
        //TODO : 백엔드 연동
        //TODO : 깃헙io 연동
        <div>
            <MenuHeader></MenuHeader>

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
                <div className="followers">
                    팔로우 20 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 팔로워 20
                </div>
                <div className="grid-image">
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage imageType">
                                <img src={cat} alt="Image"/>
                            </div>
                            <div className="subImage imageType">
                                <img src={cat2} alt="Image"/>
                                <img src={cat3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            간쥐 작렬 핸드폰케이스
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            개굿 초깜찍 홈웨어
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            노벨 맛도리 티 컬렉션
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            우리옵바 손민수템
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            간쥐 작렬 핸드폰케이스
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            개굿 초깜찍 홈웨어
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            노벨 맛도리 티 컬렉션
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            우리옵바 손민수템
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            우리옵바 손민수템
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            우리옵바 손민수템
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>
                    <div className="wishWrapper">
                        <div className="wishlist">
                            <div className="mainImage">
                                <img src={cover1} alt="Image"/>
                            </div>
                            <div className="subImage">
                                <img src={cover2} alt="Image"/>
                                <img src={cover3} alt="Image"/>
                            </div>
                        </div>
                        <div className="wishlistText">
                            우리옵바 손민수템
                        </div>
                        <div className="likesComments">
                            <div>
                                🤍56 &nbsp;
                            </div>
                            <div>
                                🗯️22
                            </div>
                        </div>
                    </div>

                </div>

                <hr/>
            </div>

        </div>
    )
}

export default MyPage;