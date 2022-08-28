import React from "react";
import styles from "./subscribe-from.module.scss";
import { BiEnvelopeOpen } from "react-icons/bi";

const SubscribeForm = () => {
    return (<>
      <form className={styles.subscribeform}>
                 <div className={styles.iconimg}>
                    <span>
                       <BiEnvelopeOpen/>
                     </span>
                 </div>
                 <div className={styles.content}>
                    <h3>SUBSCRIBE TO MY NEWSLETTER</h3>
                     <p>Sign up and receive the latest articles and book notes through email</p>
                 </div>
                 <input type="text" />
                 <button>sbiscribe</button>
              </form>
        </>)
};

export default SubscribeForm;
