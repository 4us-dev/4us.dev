import Typography from "@material-ui/core/Typography"
import React from "react"

const Title: React.FC<React.PropsWithChildren<React.ReactNode>> = ({
  children,
}) => {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      {children}
    </Typography>
  )
}

export default Title
