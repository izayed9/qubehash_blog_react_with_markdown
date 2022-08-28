import React from "react";
import TagsButton from "./TagsButton";
import styles from './footer-top.module.scss';

const FooterTag:React.FC = () => {
    return <div>
        <h2>Tags</h2>
        <div className={styles.tags}>
        <TagsButton />
        <TagsButton />
        <TagsButton />
        <TagsButton />
        <TagsButton />
        </div>

    </div>;
};

export default FooterTag;
