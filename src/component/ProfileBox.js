import styles from '../css/Component.module.css'
import Button from "./Button";


function ProfileBox() {

    return (
        <div className={styles.profileBox}>
            <div className={styles.pIntro}>
                <img className={styles.pProfile}/>
                <div className={styles.pTextDiv}>
                    <div className={styles.pName}>
                        <p className={styles.pText}>블루비</p>
                        <p className={styles.pText}>@blueb</p>
                    </div>
                </div>
                <button className={styles.pBtn}></button>
            </div>
            <div className={styles.imageDiv}>
                <img className={styles.pImage}/>
                <img className={styles.pImage}/>
                <img className={styles.pImage}/>
            </div>
        </div>
    );
}

export default ProfileBox;