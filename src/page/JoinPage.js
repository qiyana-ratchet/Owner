import styles from '../css/FirstPage.module.css'
import Button from '../component/Button';
import React, {useState} from 'react';
import '../css/JoinPage.css'
import bannerStyles from '../css/JoinPage.module.css'

function JoinPage() {
  function googleLogin() {
    console.log("google 로그인")
  }

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

      <div className="banner-container">
        <ul>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
        </ul>
      </div>
      <hr/>
      <div className="banner-container">
        <ul>
          <li>Homewear</li>
          <li>Poster card</li>
          <li>Bedding</li>
          <li>Bedding</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
        </ul>
      </div>
      <hr/>
      <div className="banner-container">
        <ul>
          <li>lamp</li>
          <li>Phone case</li>
          <li>Grip tok</li>
          <li>Bedding</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
        </ul>
      </div>
      <hr/>
      <div className="banner-container">
        <ul>
          <li>Mini Bag</li>
          <li>Bookmark</li>
          <li>Glasses</li>
          <li>fabric</li>
          <li>Cup</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
        </ul>
      </div>
      <hr/>
      <div className="banner-container">
        <ul>
          <li>Swimwear</li>
          <li>Book</li>
          <li>Poster</li>
          <li>filmcamera</li>
          <li>filmcamera</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
          <li>Perfume</li>
          <li>Grocery</li>
          <li>Jewelry</li>
          <li>Papaya</li>
        </ul>
      </div>
      <hr/>

      {/*<li className="initialCat">asdf</li>*/}
      <hr/>


      {/*<h2>Wishchiving</h2>*/}
      {/*<h3>계정 만들기</h3>*/}
      {/*<a>로그인하면 어쩌구저쩌구 동의하는 것이고...<br/></a>*/}
      {/*<Button className="" text="Google 계정으로 로그인 하기" onClick={googleLogin}/>*/}
      {/*<Button className={styles.appleLoginButton} text="Apple 계정으로 로그인 하기" onClick={googleLogin}/>*/}
      {/*<Button className={styles.kakaoLoginButton} text="Kakao 계정으로 로그인 하기" onClick={googleLogin}/>*/}
      {/*<Button className={styles.emailLoginButton} text="휴대폰 번호 혹은 이메일로 가입하기" onClick={googleLogin}/>*/}

      {/*<a className={styles.loginWithAccount}>Google 계정으로 로그인 하기<br/></a>e*/}
      {/*<a className={styles.loginWithAccount}>Apple 계정으로 로그인 하기<br/></a>*/}
      {/*<a className={styles.loginWithAccount}>Kakao 계정으로 로그인 하기<br/></a>*/}
      {/*<a className={styles.loginWithAccount}>휴대폰 번호 혹은 이메일로 가입하기</a>*/}

    </div>
  )
    ;
}

export default JoinPage;