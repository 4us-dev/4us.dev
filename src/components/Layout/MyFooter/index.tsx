import Typography from "@material-ui/core/Typography"
import React from "react"
import Copyright from "../../Copyright"
import useStyles from "./index.styles"

const MyFooter = () => {
  const classes = useStyles()
  return (
    <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        {process.env.NEXT_PUBLIC_BUSINESS_NAME}
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
        gutterBottom
      >
        <a href={`mailto:${process.env.NEXT_PUBLIC_BUSINESS_EMAIL}`}>
          {process.env.NEXT_PUBLIC_BUSINESS_EMAIL}
        </a>
      </Typography>
      <Copyright />
    </footer>
  )
}

export default MyFooter
