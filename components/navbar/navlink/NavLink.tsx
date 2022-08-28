import React, { FC } from "react";
import Link from "next/link";
import { IProps as NavTopProps} from "../top-nav";

interface IProps {
    item: NavTopProps;
}


const NavLink: FC<IProps> = ({item}) => {
    const { name, matcher } = item;
    return (
        <Link href={matcher!}>
            <a>{name}</a>
        </Link>
  )
};

export default NavLink;
