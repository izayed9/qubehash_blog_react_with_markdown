import React from "react";
import Link from "next/link";
import styles from '../../../styles/HeaderBottom.module.scss';
const BottomHeader = () => {
    return (
        <div className={styles.bottomnav}>
            <Link href="#">CAREER</Link>
            <Link href="#">TUTORIALS</Link>
            <Link href="#">SOFTWARE ARCHITECTURE</Link>
            <Link href="#">SOFTWARE DESIGN</Link>
            <Link href="#">TESTING</Link>
            <Link href="#">LINUX</Link>
        </div>
  );
};

export default BottomHeader;
