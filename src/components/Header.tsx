import type { NextPage } from 'next'
import Link from "next/link"
import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import logo from '@/images/header/dark_mode.svg' 

const Header: NextPage = () => {
  return (
  <nav>
      <ul className={styles.navItems}>
        <li className={styles.navItemTop}>
            <Link href="/">
              <a>Shimabu IT University</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/client">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.navIcon}>
            <Image src={logo} width="30" height="30"></Image>
          </li>
        </ul>
      </nav>
    
  )
}

export default Header
