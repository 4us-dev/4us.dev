import React from "react"
import { Link } from "gatsby"
import styles from './index.module.css';

const ListLink = props => (
  <li className={styles.drawerItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Drawer({ children }) {
  return (
    <ul className={styles.drawerGroup}>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/password/">Password Generate</ListLink>
      <ListLink to="/about/">About</ListLink>
    </ul>
  )
}
