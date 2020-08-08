import React from "react"
import Card from "../components/Card"
import Layout from "../components/Layout"
import Title from "../components/Layout/Title"
import CardHeader from "../components/CardHeader"
import CardBody from "../components/CardBody"
import passwordImage from "../images/password.jpg"
import Image from "../components/Image"

export default () => {
  return (
    <Layout
      title="Home"
      description="4U DEV is a website developed to help us developers"
      keywords="home,4us,dev"
    >
      <Title>Trending tools</Title>
      <Card style={{ width: "45%" }}>
        <CardHeader>Password Generator</CardHeader>
        <div style={{ overflow: "hidden" }}>
          <a href="/password_generator">
            <Image
              src={passwordImage}
              alt="keyboard with word password over it and a lock"
            />
          </a>
        </div>
      </Card>
    </Layout>
  )
}
