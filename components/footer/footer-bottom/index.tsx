import React from "react";
import { globals } from "../../../globals";
import styles from "./footer-bottom.module.scss";

const FooterBottom = () => {
    return (
        <div className={styles.bottom}>
            <p>{`© ${globals.yourName} ${new Date().getFullYear()}`}</p>
            <a href="/rss.xml">
            <img src="/img/rss-white.svg" alt="RSS Feed" height="30" width="30" />
            </a>
        </div>
  )
};

export default FooterBottom;