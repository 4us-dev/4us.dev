import React from "react"
import styles from "./index.module.css"

export default ({ src, alt, style }) => {
  return <img className={styles.container} src={src} style={style} alt={alt} />
}
