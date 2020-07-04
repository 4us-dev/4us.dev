import React from "react"
import Header from "./Header"
import Drawer from "./Drawer"
import { useStaticQuery } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <>
      <Drawer />
      <div className="main-content">
        <Header>{data.site.siteMetadata.title}</Header>
        <main>{children}</main>
      </div>
    </>
  )
}
