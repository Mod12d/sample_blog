import type { NextPage } from 'next'
import Link from "next/link"
import Image from 'next/image'
import styles from '@/styles/Header.module.scss'
import logo from '@/images/header/dark_mode.svg' 
import { useState } from 'react'

const Header: NextPage = () => {
  const [isClicked, setIsClicked] = useState(false)

  function darkMode() {
  //var element = document.body;
  //element.classList.toggle("dark-mode");
  setIsClicked(isClicked => !isClicked);
}
  return (
    <nav style={isClicked ? ( {backgroundColor: `#181818`, color:'#fff'}) : (
      {}
      )}>
      <ul className={styles.navItems}>
        <div>
        <Link href="/menu">
          <label className={styles.menu}><span>
              <a></a>
          </span></label>
        </Link>  
        </div>
        <li className={styles.navItemTop}>
            <Link href="/">
              <a>Shimabu IT University</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li className={styles.navIcon} >
            <Image src={logo} width="34" height="35" onClick={darkMode}/>
          </li>
        </ul>
      </nav>
    
  )
}

export default Header
