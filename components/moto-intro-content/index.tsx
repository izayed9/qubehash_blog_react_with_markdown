import React from "react";
import styles from './moto-intro.module.scss';

const MotointroContent:React.FC = () => {
    return (
        <div className={styles.introcontent}>
           <h2>Hey buddies</h2>
           <h3>On this website, we explore tutorials and techniques that help us have a more productive and interesting coder life. In the last section of this home page, I also share a summary of interesting non-fiction books that I had read, if you're interested, just give it a try. I weekly share technicals articles, so if you don't want to miss them, signup below and join a growing community of friendly readers.</h3>
       </div>
  )
};

export default MotointroContent;
