import React from "react";
import style from "../../../styles/HeaderMid.module.scss";
import { FaSearch } from "react-icons/fa";


const MiddleHeader = () => {
    return <div className={style.headermid}>
          <div className="logo">
            <img src="/img/qubehash-logo.jpg"  alt="logo" />
             <h2>QubeHash_</h2>
           </div>
            <form action="" >
                <input type="text" placeholder="Search"/>
                <button type="submit"><FaSearch/></button>
            </form>
        </div>

};

export default MiddleHeader;
