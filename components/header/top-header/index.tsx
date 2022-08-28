import React from "react";
import Link from "next/link";
import styles from '../../../styles/HeaderTop.module.scss';
import NavTop from "../../navbar/top-nav";
import {TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram} from 'react-icons/ti'
import {AiFillGithub} from 'react-icons/ai'
const TopHeader:React.FC = () => {
  return (
    <div className={styles.top}>
      <div className={styles.social}>
        <Link href='/'>
          <a><TiSocialTwitter /></a>
        </Link>
        <Link href='/'>
          <a><TiSocialLinkedin /></a>
        </Link>
        <Link href='/'>
          <a><TiSocialInstagram /></a>
        </Link>
        <Link href='/'>
          <a><AiFillGithub /></a>
        </Link>
      </div>
      <NavTop />
    </div>
  )

};

export default TopHeader;
