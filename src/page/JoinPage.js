import styles from '../css/FirstPage.module.css'
import Button from "../component/Button";
import React, { useState } from 'react';

function JoinPage() {



    return (

    <div className={styles.main}>

        <h2>Wishchiving</h2>
        <h3>계정 만들기</h3>
        <a>로그인하면 어쩌구저쩌구 동의하는 것이고...<br/></a>
        <Button className={styles.googleLoginButton} text = "Google 계정으로 로그인 하기" onClick = {googleLogin}/>
        <Button className={styles.appleLoginButton} text = "Apple 계정으로 로그인 하기" onClick = {googleLogin}/>
        <Button className={styles.kakaoLoginButton} text = "Kakao 계정으로 로그인 하기" onClick = {googleLogin}/>
        <hr/>
        <Button className={styles.emailLoginButton} text = "휴대폰 번호 혹은 이메일로 가입하기" onClick = {googleLogin}/>

        <a className={styles.loginWithAccount}>Google 계정으로 로그인 하기<br/></a>
        <a className={styles.loginWithAccount}>Apple 계정으로 로그인 하기<br/></a>
        <a className={styles.loginWithAccount}>Kakao 계정으로 로그인 하기<br/></a>
        <hr/>
        <a className={styles.loginWithAccount}>휴대폰 번호 혹은 이메일로 가입하기</a>

    </div>
    );
}

export default JoinPage;