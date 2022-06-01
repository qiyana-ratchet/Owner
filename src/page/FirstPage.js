import styles from '../css/FirstPage.module.css'
import Button from "../component/Button";

function FirstPage() {

    function login() {
        console.log("로그인")
    }
    function register() {
        console.log("회원가입")
    }
    return (
        <div className={styles.main}>
            <h1 className={styles.catchphrase}>당신의 ?????을 저장하세요<br/>
                간지 작렬하는 캐치프레이즈</h1>
            <Button className={styles.joinButton} text = "계정 만들기" onClick = {register}></Button>
            <Button className={styles.loginButton} text = "로그인" onClick = {login}></Button>
            <h3 className={styles.logo}>Wishchiving</h3>
            <a className={styles.lookHomepage}>홈페이지 둘러보기</a>
        </div>
    );
}

export default FirstPage;
