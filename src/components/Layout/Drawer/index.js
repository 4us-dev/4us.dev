import React from "react"
import { Link } from "gatsby"
import styles from "./index.module.css"

const ListLink = props => (
  <li className={styles.drawerItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Drawer({ open }) {
  console.log('open', open);
  return (
    <aside className={`${styles.container} ${open ? '' : styles.containerClosed}`}>
      <div className={styles.menuLogo}>4US DEV</div>
      <ul className={styles.drawerGroup}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/password/">Password Generate</ListLink>
        <ListLink to="/about/">About</ListLink>
      </ul>
    </aside>
  )
}
