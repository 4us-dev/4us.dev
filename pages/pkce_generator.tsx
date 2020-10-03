import Container from "@material-ui/core/Container"
import React from "react"
import Layout from "../src/components/core/Layout"
import Title from "../src/components/core/Title"
import PKCEGeneratorForm from "../src/components/pkce/PKCEForm"

const PKCEGeneratorPage = (): JSX.Element => {
  return (
    <Layout title="PKCE Generator">
      <Container>
        <Title>PKCE Generator</Title>
      </Container>
      <PKCEGeneratorForm />
    </Layout>
  )
}

export default PKCEGeneratorPage
