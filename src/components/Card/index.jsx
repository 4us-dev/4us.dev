import React from "react"
import styles from "./index.module.css"

export default ({ children, style }) => {
  return (
    <div className={styles.container} style={style}>
      {children}
    </div>
  )
}
