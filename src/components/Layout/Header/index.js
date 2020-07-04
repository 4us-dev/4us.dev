import { Link } from "gatsby"
import React from "react"
import styles from "./index.module.css"
import { FaBars } from 'react-icons/fa';

export default function Header({ children }) {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        <h3 className={styles.title}>{children}</h3>
      </Link>
      <button type='button' className='hide-md-up'>
        <FaBars/>
      </button>
    </header>
  )
}
