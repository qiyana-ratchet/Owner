import styles from '../css/MainPage.module.css'
import React, {useState} from 'react';
import Header from "../component/Header";
import FeedBox from "../component/FeedBox";
import ProfileBox from "../component/ProfileBox";
import MenuHeader from "../component/MenuHeader";


function MainPage() {

    return (
        <div>
            <MenuHeader></MenuHeader>

            <div className={styles.main}>
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
        </div>
    );
}

export default MainPage;
