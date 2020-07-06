import React from "react"
import Layout from "../components/Layout"

export default () => {
  return (
    <Layout title="Home" description="4U DEV is a website developed to help us developers" keywords="home,4us,dev">
      <div style={{ color: `purple` }}>
        <h1>Hello Gatsby!</h1>
        <p>What a world.</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </div>
    </Layout>
  )
}
