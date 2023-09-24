import React from 'react'
import Link from 'next/link'
import styles from './Menu.module.css'
export const Menu = () => {
  return (
    <ul className={styles.menu}>
    <li className={styles.menuItem}><Link href="/home">Home</Link></li>
    <li className={styles.menuItem}><Link href="/about">About</Link></li>
    <li className={styles.menuItem}><Link href="/contact">Contact</Link></li>
  </ul>
  );
};
 