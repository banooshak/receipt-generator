import React from 'react';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Keenan's Receipt Generator</h1>
      <p className={styles.subtitle}>Your one-stop solution for managing transactions</p>
    </header>
  );
};

export default Header;