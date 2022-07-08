import styles from '../css/FirstPage.module.css'
import Button from "../component/Button";
import React, { useState } from 'react';
import Modal from '../component/Modals/Modal';
import {Link} from 'react-router-dom';


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
        console.log("모달 열음")
    };
    const closeModal = () => {
        setModalOpen(false);
        console.log("모달 닫음")
    };

    return (
        <React.Fragment>
            <Modal open={modalOpen} close={closeModal} header="">
            </Modal>
        <div className={styles.main}>
                <div className={styles.flex}>
                    <div className={styles.row}>
                        <h3 className={styles.logo}>Wishchiving</h3>
                        <Button className={styles.loginButton} text="로그인" onClick={login}></Button>
                    </div>
                    <div className={styles.mid}>
                        <h1 className={styles.catchphrase}>당신의 ?????을 저장하세요<br/>
                            간지 작렬하는 캐치프레이즈</h1>
                        <Button className={styles.joinButton} text="계정 만들기"onClick={ () => {
                            register()
                            openModal()
                        }}></Button>
                    </div>
                    <div className={styles.bottom}>
                        <Link to = "/mainpage">
                        <p className={styles.lookHomepage}>홈페이지 둘러보기</p>
                        </Link>
                    </div>
                </div>
        </div>
        </React.Fragment>
    );
}

export default FirstPage;
