import React from "react"
import styles from "./index.module.css"

export default ({ children, onClick, ...rest }) => {
  return (
    <button className={styles.root} onClick={onClick} {...rest}>
      {children}
    </button>
  )
}
