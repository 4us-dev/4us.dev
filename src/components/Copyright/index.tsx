import Typography from "@material-ui/core/Typography"
import React from "react"
import Link from "../Link"

const Copyright = (): JSX.Element => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Todos os direitos reservados © "}
      <Link href={`${process.env.NEXT_PUBLIC_BUSINESS_SITE}`} target="_blank">
        {process.env.NEXT_PUBLIC_BUSINESS_NAME}
      </Link>
      {` ${new Date().getFullYear()}.`}
    </Typography>
  )
}

export default Copyright
