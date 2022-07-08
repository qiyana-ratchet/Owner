import React, {useState} from 'react';
import styles from '../css/Component.module.css'
import {Link} from 'react-router-dom';
import Button from "./Button";

function Header() {

    return (
        <div className={styles.header}>
            <nav className={styles.nav}>
                <p>Owner</p>
                <ul className={styles.menuBar}>
                        <li className={styles.menuItem}>Home</li>
                        <li className={styles.menuItem}>Following</li>
                        <li className={styles.menuItem}>Discover</li>
                        <li className={styles.menuItem}>Feeds</li>
                </ul>
                <Button>Log In</Button>
            </nav>
        </div>
    );
}

export default Header;
