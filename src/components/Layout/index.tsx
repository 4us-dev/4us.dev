import Head from "next/head"
import React from "react"
import GlobalErrorHandler from "../contexts/GlobalErrorHandler"
import MyFooter from "./MyFooter"
import MyHeader from "./MyHeader"

interface Props extends React.PropsWithChildren<any> {
  title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <GlobalErrorHandler>
      <Head>
        <title>
          {title} - {process.env.NEXT_PUBLIC_APP_NAME}
        </title>
      </Head>
      <MyHeader />
      <main>{children}</main>
      <MyFooter />
    </GlobalErrorHandler>
  )
}

export default Layout
