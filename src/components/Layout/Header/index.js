import { Link } from "gatsby"
import React from "react"
import styles from "./index.module.css"
import { FaBars } from 'react-icons/fa';

export default function Header({ children, onMenuToogle }) {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        <h3 className={styles.title}>{children}</h3>
      </Link>
      <button type='button' className={styles.menuButton} onClick={onMenuToogle}>
        <FaBars/>
      </button>
    </header>
  )
}
