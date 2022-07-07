import React, {useState} from 'react';
import styles from '../css/Component.module.css'
import Button from "./Button";


function FeedBox() {

    return (
        <div className={styles.feedBox}>
            <img className={styles.img}/>
            <div className={styles.intro}>
                <img className={styles.profile}/>
                <div className={styles.textDiv}>
                    <div className={styles.name}>
                        <p className={styles.text}>블루비</p>
                        <p className={styles.text}>@blueb</p>
                    </div>
                    <p className={styles.text}>Gata - BigWaves</p>
                </div>
                <div className={styles.btnBox}>
                    <button className={styles.btn}></button>
                    <button className={styles.btn}></button>
                </div>
            </div>
        </div>
    );
}

export default FeedBox;
