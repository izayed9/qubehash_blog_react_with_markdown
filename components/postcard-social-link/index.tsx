import React from "react";
import Link from "next/link";
import styles from "../../styles/Postcardlink.module.scss";
import {FcGlobe} from 'react-icons/fc'
import { FaTwitter } from "react-icons/fa";

const PostcardSocialLinks:React.FC = () => {
    return (<div className={styles.sLink}>
            <p>Links :</p>
            <div>
                <Link href='/'>
                    <a href="#"><FcGlobe/></a>
                </Link>
                <Link href='/'>
                    <a href="#"><FaTwitter/></a>
                </Link>
              </div>
           </div>);
};

export default PostcardSocialLinks;
