import { Link } from "gatsby"
import React from "react"
import styles from "./index.module.css"

export default function Header({ children }) {
  return (
    <header className={styles.container}>
      <Link to="/" className={styles.homeLink}>
        <h3 style={{ display: `inline` }}>{children}</h3>
      </Link>
    </header>
  )
}
