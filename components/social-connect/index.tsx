import Link from "next/link";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import {  TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import styles from './social-connect.module.scss';
const SocialConnect:React.FC = () => {
    return (
        <div className={styles.connectLink}>
        <p>📱. LET'S BE FRIENDS</p>
        <div className={styles.sociolinks}>
            <Link href='/'>
              <div className={styles.listlink}>
                <span><TiSocialTwitter /></span>
                <p>Twitter</p>
               </div>
            </Link>
            <Link href='/'>
                <div className={styles.listlinkdin}>
                    <span><TiSocialLinkedin /></span>
                    <p>Linkedin</p>
               </div>
            </Link>

            <Link href='/'>
                <div className={styles.listlinkgit}>
                    <span><AiFillGithub /></span>
                    <p>Github</p>
                </div>
            </Link>

        </div>
    </div>)
};

export default SocialConnect;
