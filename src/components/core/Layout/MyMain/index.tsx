import React from "react"
import useStyles from "./index.styles"

const MyMain: React.FC<React.PropsWithChildren<any>> = ({ children }) => {
  const classes = useStyles()
  return <main className={classes.root}>{children}</main>
}

export default MyMain
