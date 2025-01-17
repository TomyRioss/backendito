import React from 'react';
import styles from './HomeHeader.module.css';

const HomeHeader: React.FC = () => {
  return (
    <header
      className={`${styles.bg} flex flex-col items-center justify-center h-screen `}
    ></header>
  );
};

export default HomeHeader;
