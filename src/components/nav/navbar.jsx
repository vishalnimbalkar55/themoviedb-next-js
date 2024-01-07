"use client"

import Logo from "@/assets/Logo";
import Link from "next/link";
import React from "react";
import styles from "./nav.module.scss";
import { SearchIcon } from "@/assets/icon";
import { usePathname } from "next/navigation";



const NavBar = ({ navItems }) => {
  const pathName = usePathname()
  console.log("pathName-------------------", pathName.endsWith('/drama'))

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
              const activeLink = pathName.endsWith(item.link)
              console.log("activeLink-----------------", activeLink)
              return (
                <Link href={item.link} className={activeLink ? `${styles.active} ${styles.navlink}` : styles.navlink}>
                  <li className={styles.navItem}>{item.item}</li>
                </Link>
              )


            })}
          </ul>
        </div>
        <div className={`${styles.navItem} ${styles.searchIcon}`}><SearchIcon /></div>
      </div>
    </nav>
  );
};

export default NavBar;
