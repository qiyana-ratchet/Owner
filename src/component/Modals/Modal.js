import React from 'react';
import styles from '../../css/Modal.css';
import styleModules from '../../css/Modal.module.css'
import Button from "../../component/Button";

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;
    function googleLogin() {
        console.log("google 로그인")
    }
    function appleLogin() {
        console.log("apple 로그인")
    }
    function kakaoLogin() {
        console.log("kakao 로그인")
    }
    function emailLogin() {
        console.log("email 로그인")
    }
    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        <a className = {styleModules.title}>Wishchiving</a>
                        <h3 className = {styleModules.createAccount}>계정 만들기</h3>
                        <a className = {styleModules.termsOfService}>로그인 하면 어쩌구저저구 개인정보 어쩌구 저저구에 의해서 어쩌구 저꺼구구 될거구요 약관을 확인 잘 해보시구 뭐 어떻게든 되겠죠..
                            개인정보를 막 가져다쓰지는 않을게요.. 그냥 뭐 간단한 .. 신상정도.... 네 ...<br/></a>
                        <Button className={styleModules.googleLoginButton} text={"Google 계정으로 로그인 하기"} onClick={googleLogin}></Button>
                        <Button className={styleModules.appleLoginButton} text={"Apple 계정으로 로그인 하기"} onClick={appleLogin}></Button>
                        <Button className={styleModules.kakaoLoginButton} text={"Kakao 계정으로 로그인 하기"} onClick={kakaoLogin}></Button>
                        <hr width={"300px"}/>
                        <Button className={styleModules.emailLoginButton} text={"휴대폰 번호 혹은 이메일로 가입하기"} onClick={emailLogin}></Button>
                        {props.children}</main>
                    <footer>
                        {/*<button className="close" onClick={close}>*/}
                        {/*    close*/}
                        {/*</button>*/}
                    </footer>
                </section>
            ) : null}
        </div>
    );
};
export default Modal;