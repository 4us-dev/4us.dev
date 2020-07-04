import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <h1>Page not found!</h1>
        <p>Opss! This page not exists</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </Layout>
  )
}
