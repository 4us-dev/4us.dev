import Head from "next/head"
import React from "react"
import GlobalErrorHandler from "../../contexts/GlobalErrorHandler"
import MyFooter from "./MyFooter"
import MyHeader from "./MyHeader"
import MyMain from "./MyMain"
import useStyles from "./index.styles"

interface Props extends React.PropsWithChildren<any> {
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const classes = useStyles()
  return (
    <GlobalErrorHandler>
      <Head>
        <title>
          {title ? `${title} -` : ""} {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      <div className={classes.root}>
        <MyHeader />
        <div className={classes.container}>
          <MyMain>{children}</MyMain>
          <MyFooter />
        </div>
      </div>
    </GlobalErrorHandler>
  )
}

export default Layout
