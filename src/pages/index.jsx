import React from "react"
import Layout from "../components/Layout"
import Title from "../components/Layout/Title"
import logo from "../images/logo.png"
export default () => {
  return (
    <Layout
      title="Home"
      description="4U DEV is a website developed to help us developers"
      keywords="home,4us,dev"
    >
      <Title>4US DEV</Title>
      <p>What a world.</p>
      <img src={logo} className='img-responsive' alt="4us dev logo" />
    </Layout>
  )
}
