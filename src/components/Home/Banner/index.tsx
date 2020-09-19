import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import React from "react"
import useStyles from "./index.styles"

interface Props {
  title?: string
  message?: string
}
const Banner: React.FC<Props> = ({ title, message }) => {
  const classes = useStyles()

  return (
    <div className={classes.heroContent}>
      <Container className={classes.heroTextContainer}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="inherit"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography variant="h5" align="center" color="inherit" paragraph>
          {message}
        </Typography>
      </Container>
    </div>
  )
}

export default Banner
