import React from "react";
import styles from "./footer-top.module.scss";
const FooterNewsCard:React.FC = () => {
    return (
        <div className={styles.newsCard}>
            <img src="/img/img1.jpg" alt="" />
             <h2>Simple Steps to Dockerize your Spring Boot Application </h2>
        </div>
  )
};

export default FooterNewsCard;
