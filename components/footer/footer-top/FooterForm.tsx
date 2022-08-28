import React from "react";
import styles from './footer-top.module.scss';
import { globals } from "../../../globals";

const FooterForm:React.FC = () => {
    return (<div className={styles.topform}>
                <div>
                    <img src="./img/mail.png"/>
                    <h2>{`${globals.yourName}`}</h2>
                </div>
                <p>Don't want to miss my next post ? Signup to my weekly newsletter.</p>
                <form>
                <input type="text" name="name" placeholder="Enter your Email address" />
                <button className="btn">Submit</button>
                </form>
        </div>)
};

export default FooterForm;
