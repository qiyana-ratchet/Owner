import styles from './css/FirstPage.module.css'


function FirstPage() {
    return (
        <div className={styles.main}>
            <h1 className={styles.catchphrase}>당신의 ?????을 저장하세요<br/>
                간지 작렬하는 캐치프레이즈</h1>
            <button className={styles.joinButton}>계정 만들기</button>
            <a className={styles.loginButton}>로그인</a>
            <h3 className={styles.logo}>Wishchiving</h3>
            <a className={styles.lookHomepage}>홈페이지 둘러보기</a>
        </div>
    );
}

export default FirstPage;
