'use client';

import { useState } from 'react';
import styles from './page.module.css';
import logo1 from '../../public/original logo1.jpeg';
import logo2 from '../../public/original logo2.png';

export default function HeaderPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src={logo1.src} alt="CSD Logo" className={styles.logo} />
        <span className={styles.tagline}>
          DIGITALIZATION <br /> OF DEVELOPMENT
        </span>
        <div className={styles.verticalLine}></div>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <nav className={`${styles.navbar} ${menuOpen ? styles.showMenu : ''}`}>
        <ul className={styles.navList}>
          <li className={`${styles.navItem} ${styles.active}`}>
            Development types
          </li>
          <li className={styles.navItem}>Catalog</li>
          <li className={styles.navItem}>Projects</li>
          <li className={styles.navItem}>Services</li>
          <li className={styles.navItem}>Useful materials</li>
          <li className={styles.navItem}>About us </li>
        </ul>
      </nav>

      <div className={styles.verticalLine}></div>

      <div className={styles.partnerLogo}>
        <img src={logo2.src} alt="Autodesk" className={styles.partnerImage} />
        <span className={styles.partnerText}>Value Added Distributor</span>
      </div>
    </header>
  );
}
