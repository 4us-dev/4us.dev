import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"
import logo from "../../../images/logo-white.png"

const ListLink = props => (
  <li className={styles.drawerItem}>
    <Link to={props.to} tabIndex={props.tabIndex}>
      {props.children}
    </Link>
  </li>
)

export default ({ open, onMenuToggle }) => {
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
          tabIndex="0"
        >
          Close
        </span>
      )}
      <aside className={asideClasses}>
        <div className={styles.menuLogo}>
          <img src={logo} className="img-responsive" alt="4us dev logo" />
        </div>
        <ul className={styles.drawerGroup}>
          <ListLink to="/" tabIndex={`${++index}`}>
            Home
          </ListLink>
          <ListLink to="/password_generator/" tabIndex={`${++index}`}>
            Password Generate
          </ListLink>
          <ListLink to="/about/" tabIndex={`${++index}`}>
            About
          </ListLink>
        </ul>
      </aside>
    </>
  )
}
