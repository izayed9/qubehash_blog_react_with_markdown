import React from "react";
import styles from "./footer-top.module.scss";
import FooterNewsCard from "./FooterNewsCard";

const FooterNews:React.FC = () => {
    return <div className={styles.news}>
        <h2>Recent News</h2>
        <FooterNewsCard />
        <FooterNewsCard />
  </div>;
};

export default FooterNews;
