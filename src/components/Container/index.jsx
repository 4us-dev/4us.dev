import React from "react"
import containerStyles from "./index.module.css"

export default ({ children }) => (
  <div className={containerStyles.container}>{children}</div>
)
