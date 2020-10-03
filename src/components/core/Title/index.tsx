import Typography from "@material-ui/core/Typography"
import React from "react"
import useStyles from "./index.styles"

const Title: React.FC<React.PropsWithChildren<React.ReactNode>> = ({
  children,
}) => {
  const classes = useStyles()
  return (
    <Typography
      variant="h4"
      component="h1"
      gutterBottom
      className={classes.root}
    >
      {children}
    </Typography>
  )
}

export default Title
