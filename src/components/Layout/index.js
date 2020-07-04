import React, { useState, useEffect } from "react"
import Header from "./Header"
import Drawer from "./Drawer"
import { useStaticQuery } from "gatsby"
import useWindowSize from "../../hooks/useWindowSize"
import { graphql } from 'gatsby'

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
