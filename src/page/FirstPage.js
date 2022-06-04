import styles from '../css/FirstPage.module.css'
import Button from "../component/Button";
import React, { useState } from 'react';
import Modal from '../component/Modals/Modal';
import modalStyles from '../css/Modal.css';

function FirstPage() {

    function login() {
        console.log("로그인")
    }
    function register() {
        console.log("회원가입")
    }

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };
    function googleLogin() {
        console.log("sns 로그인")
    }

    return (
        <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="Wishchiving">
                <h3>계정 만들기</h3>
                {/*<button className={modalStyles.googleLoginButton} text = "Google 계정으로 로그인 하기" onClick = {googleLogin}/>*/}
                {/*<Button className={modalStyles.appleLoginButton} text = "Apple 계정으로 로그인 하기" onClick = {googleLogin}/>*/}
                {/*<Button className={modalStyles.kakaoLoginButton} text = "Kakao 계정으로 로그인 하기" onClick = {googleLogin}/>*/}
                {/*<hr/>*/}
                {/*<Button className={modalStyles.emailLoginButton} text = "휴대폰 번호 혹은 이메일로 가입하기" onClick = {googleLogin}/>*/}
            </Modal>

            <div className={styles.main}>
                <h1 className={styles.catchphrase}>당신의 ?????을 저장하세요<br/>
                    간지 작렬하는 캐치프레이즈</h1>
                <Button className={styles.joinButton} text = "계정 만들기" onClick = {register} onClick={openModal}></Button>
                <Button className={styles.loginButton} text = "로그인" onClick = {login}></Button>
                <h3 className={styles.logo}>Wishchiving</h3>
                <a className={styles.lookHomepage}>홈페이지 둘러보기</a>
            </div>
        </React.Fragment>
    );
}

export default FirstPage;
