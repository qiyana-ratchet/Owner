import React from 'react';
import styles from '../../css/Modal.css';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header } = props;

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
                        <a>로그인하면 어쩌구저쩌구 동의하는 것이고...<br/></a>
                        {props.children}</main>
                    <footer>
                        <button className="close" onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};
export default Modal;