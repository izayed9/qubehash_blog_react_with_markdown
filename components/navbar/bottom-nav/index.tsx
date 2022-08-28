import React from "react";
import { Url } from "url";
import styles from '../styles/NavTop.module.scss';
import NavLink from "../navlink/NavLink";

const navMenuItems = [
    {
      name: 'CAREER',
      matcher: '/career',

    },
    {
      name: 'TUTORIALS',
      matcher: '/tutorials',

    },
    {
      name: 'SOFTWARE ARCHITECTURE',
      matcher: '/software-architecture',

    },
    {
        name: 'SOFTWARE DESIGN',
        matcher: '/software-design',

      },
      {
        name: 'TESTING',
        matcher: '/testing',

      },
      {
        name: 'LINUX',
        matcher: '/mosques',

    },
    {
        name: 'CI-CD',
        matcher: '/ci-cd',
      }

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
