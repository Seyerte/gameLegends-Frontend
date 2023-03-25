import React from "react";
import styles from "./Navbar.module.css";
import logoGameLegends from "../../src/assets/logoGameLegends.png"
import {AiOutlineUser} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"

function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.topNavContainer}>
        <div>
          <img className={styles.logo} src={logoGameLegends} alt="logo" />
        </div>
        <div className={styles.searchContainer}>
          <input className={styles.search}/>
          <FiSearch className={styles.iconSearch}/>
        </div>
        <div>
          <AiOutlineUser className={styles.user}/>
        </div>
      </div>
      <div className={styles.ulContainer}>
        <ul className={styles.ulNavbar}>
          <li>Home</li>
          <li>Games</li>
          <li>Companies</li>
          <li>Platform</li>
          <li>Add New</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
