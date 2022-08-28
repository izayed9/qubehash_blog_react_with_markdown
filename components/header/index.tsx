import React from 'react';
import styles from '../../styles/Header.module.scss';
import TopHeader from './top-header';
import MiddleHeader from './middle-header';
import BottomHeader from './bottom-header';



export const Header: React.FC = () => (
  <div className={styles.header}>
    <div className='container'>
      <TopHeader />
      <MiddleHeader />
      <BottomHeader />
    </div>
     </div>
);
