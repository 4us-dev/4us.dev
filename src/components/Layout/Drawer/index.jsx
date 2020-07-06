import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const ListLink = props => (
  <li className={styles.drawerItem}>
    <Link to={props.to} tabIndex={props.tabIndex}>{props.children}</Link>
  </li>
)

export default function Drawer({ open, onMenuToggle }) {
  const asideClasses = `${styles.container} ${
    open ? "" : styles.containerClosed
  }`
  let index = 0
  return (
    <>
      {open && (
        <span
          className={styles.modal}
          onClick={onMenuToggle}
          onKeyDown={onMenuToggle}
          role="button"
          tabIndex='0'
        >
          Close
        </span>
      )}
      <aside className={asideClasses}>
        <div className={styles.menuLogo}>4US DEV</div>
        <ul className={styles.drawerGroup}>
          <ListLink to="/" tabIndex={`${++index}`}>
            Home
          </ListLink>
          <ListLink to="/password_generate/" tabIndex={`${++index}`}>Password Generate</ListLink>
          <ListLink to="/about/" tabIndex={`${++index}`}>About</ListLink>
        </ul>
      </aside>
    </>
  )
}
