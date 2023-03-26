import React from "react";
import styles from "./Navbar.module.css";
import logoGameLegends from '../../assets/logoGameLegends.png'
import {AiOutlineUser} from "react-icons/ai"
import {FiSearch} from "react-icons/fi"
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className={styles.navContainer}>
      <div className={styles.topNavContainer}>
        <div>
          <img className={styles.logo} src={logoGameLegends} alt="logo game legends" />
        </div>
        <div className={styles.searchContainer}>
          <input className={styles.search}/>
          <FiSearch className={styles.iconSearch}/>
        </div>
        <div>
          <AiOutlineUser className={styles.user}/>
        </div>
      </div>
        <div className={styles.NavbarLinks}>
          <Link className={styles.link} to={'/'}>Home</Link>
          <Link className={styles.link} to={'/games'}>Games</Link>
          <Link className={styles.link} to={''}>Companies</Link>
          <Link className={styles.link} to={''}>Platform</Link>
          <Link className={styles.link} to={''}>Add New</Link>
        </div>
      </div>
  );
}

export default Navbar;
