import React from "react"

export default ({ children, ...props }) => {
  return <label {...props}>{children}</label>
}
