import Link from "next/link";
import React from "react";
import styles from './footer-top.module.scss';

const TagsButton:React.FC = () => {
    return (<div className={styles.tagsBtn}>
        <Link href="/">
            <a>Tutorial</a>
        </Link>
       </div>)
};

export default TagsButton;
