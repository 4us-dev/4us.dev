import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import useWindowSize from "../../hooks/useWindowSize"
import Drawer from "./Drawer"
import Header from "./Header"

export default function Layout({ children, title, description, keywords }) {
  if (!title) throw Error("title is required")
  if (!description) throw Error("description is required")
  if (!keywords) throw Error("keywords is required")
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

  const { width } = useWindowSize()
  const menuStateInitial = width >= 768
  const [menuOpen, setMenuOpen] = useState(menuStateInitial)

  const onMenuToogle = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    setMenuOpen(menuStateInitial)
  }, [menuStateInitial])

  return (
    <>
      <Helmet>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <title>
          {data.site.siteMetadata.title} - {title}
        </title>
      </Helmet>
      <Drawer open={menuOpen} onMenuToggle={onMenuToogle} />
      <div className="main-content">
        <Header onMenuToogle={onMenuToogle}>
          {data.site.siteMetadata.title}
        </Header>
        <main>{children}</main>
      </div>
    </>
  )
}
