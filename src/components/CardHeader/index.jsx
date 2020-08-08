import React from "react"
import styles from "./index.module.css"

export default ({ children, style, header }) => {
  return <div className={styles.container}>{children}</div>
}
