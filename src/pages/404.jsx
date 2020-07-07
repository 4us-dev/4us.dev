import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Title from "../components/Layout/Title"

export default () => {
  return (
    <Layout
      title="Not Found"
      description="Page not found"
      keywords="page,not,found"
    >
      <div style={{ color: `purple` }}>
        <Title>Page not found!</Title>
        <p>Opss! This page not exists</p>
        <Link to="/">Go back to Home</Link>
      </div>
    </Layout>
  )
}
