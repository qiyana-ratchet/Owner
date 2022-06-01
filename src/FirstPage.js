import styles from './css/FirstPage.module.css'

function FirstPage() {
    return (
        <body>
            <div>
                <h1 className={styles.catchphrase}>당신의 ?????을 저장하세요<br/>
                    간지 작렬하는 캐치프레이즈</h1>
                <a href="" className={styles.joinButton}>계정 만들기</a>
            </div>
        </body>

    );
}

export default FirstPage;
