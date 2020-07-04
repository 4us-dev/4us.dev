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
      <Header>{data.site.siteMetadata.title}</Header>
      <div className="main-content">
        <aside>
          <Drawer />
        </aside>
        <main>{children}</main>
      </div>
      <footer>footer</footer>
    </>
  )
}
