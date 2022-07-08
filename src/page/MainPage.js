import styles from '../css/MainPage.module.css'
import React, {useState} from 'react';
import Header from "../component/Header";
import FeedBox from "../component/FeedBox";
import ProfileBox from "../component/ProfileBox";


function MainPage() {

    return (
        <div className={styles.main}>
            <Header/>
            <div className={styles.flex}>
                <div className={styles.feed}>
                    <div className={styles.row}>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                    </div>
                    <div className={styles.row}>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                    </div>
                    <div className={styles.row}>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                        <FeedBox/>
                    </div>
                </div>
                <div className={styles.profile}>
                    <ProfileBox/>
                    <ProfileBox/>
                    <ProfileBox/>
                    <ProfileBox/>
                    <ProfileBox/>
                    <ProfileBox/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
