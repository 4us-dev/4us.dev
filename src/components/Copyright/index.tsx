import React from "react"
import Typography from "@material-ui/core/Typography"
import MuiLink from "@material-ui/core/Link"

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos os direitos reservados © "}
      <MuiLink
        color="inherit"
        href={`${process.env.NEXT_PUBLIC_BUSINESS_SITE}`}
        target="_blank"
      >
        {process.env.NEXT_PUBLIC_BUSINESS_NAME}
      </MuiLink>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  )
}
