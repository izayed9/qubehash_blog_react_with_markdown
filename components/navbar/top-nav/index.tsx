import React from "react";
import { Url } from "url";
import styles from '../../../styles/NavTop.module.scss';
import NavLink from "../navlink/NavLink";

const navMenuItems = [
    {
      name: 'Home',
      matcher: '/',

    },
    {
      name: 'Author',
      matcher: '/author',

    },
    {
      name: 'About',
      matcher: '/about',

    },

  ];

  export interface IProps {
    name?: string;
    matcher?: Url;
  }

const NavTop: React.FC<IProps> = () => {
    return (<div className={styles.navStyle}>
        {navMenuItems.map((item: any) => <NavLink item={item}  />)}
    </div>);
};

export default NavTop;
