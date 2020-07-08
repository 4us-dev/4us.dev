import React from "react"
import styles from './index.module.css'

export default ({ id, label, ...props }) => {
  return (
    <label htmlFor={id} className={styles.myLabel}>
      {label}
      <input id={id} className={styles.myInput} {...props} />
    </label>
  )
}