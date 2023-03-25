import React from 'react'
import styles from './Footer.module.css'
import logoGameLegends from "../../assets/logoGameLegends.png"

function Footer() {
  return (
    <div className={styles.footerContainer}>
      <ul className={styles.footerList}>
        <li>Website terms for use</li>
        <li>Privacy</li>
        <li>Cookies</li>
        <li className={styles.footerItem}>
          <img className={styles.logo} src={logoGameLegends} alt="logo game legends" />
          <p className={styles.copyRight}>Copyright © 2023 Game Legends, Inc.</p>
        </li>
      </ul>
    </div>
  )
}

export default Footer
