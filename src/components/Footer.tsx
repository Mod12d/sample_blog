import type { NextPage } from 'next'
import Link from "next/link"
import styles from '@/styles/Home.module.scss'

const Header: NextPage = () => {
  return (
      <nav>
        <ul className={styles.navItems}>
          <h3 className={styles.navItem}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>y
          <li className={styles.navItem}>
            <Link href="/client">
              <a>Client</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/server">
              <a>Server</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/protected">
              <a>Protected</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/api-example">
              <a>API</a>
            </Link>
          </li>
        </ul>
      </nav>
  )
}

export default Header
