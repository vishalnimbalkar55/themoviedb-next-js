import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import styles from "./nav.module.scss";
import { SearchIcon } from "@/assets/icon";
// import SearchIcon from "@/assets/icon";



const NavBar = ({ navItems }) => {

  return (
    <nav className={styles.navbar}>
      <div className={`globalSectionWrapper ${styles.navWrapper}`}>
        <div className={styles.navlogo}>
          <Link href={"/"}>
            <Logo />
          </Link>
        </div>
        <div className={styles.navTabs}>
          <ul>
            {navItems.map((item) => {
              return <li className={styles.navItem}>{item.item}</li>;
            })}
          </ul>
        </div>
        <div className={styles.navItem}><SearchIcon /></div>
      </div>
    </nav>
  );
};

export default NavBar;
