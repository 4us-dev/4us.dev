import React from "react"
import styles from "./index.module.css"

export default ({ children, className, message, ...rest }) => {
  return (
    <div className={`${styles.root} ${className}`} {...rest}>
      <span class={styles.tooltiptext}>{message}</span>
      {children}
    </div>
  )
}
