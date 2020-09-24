import Container from "@material-ui/core/Container"
import React from "react"
import Layout from "../../components/Layout"
import Title from "../../components/Title"

const PasswordGenerator = (): JSX.Element => {
  return (
    <Layout title="PKCE Generator">
      <Container>
        <Title>PKCE Generator</Title>
      </Container>
    </Layout>
  )
}

export default PasswordGenerator
