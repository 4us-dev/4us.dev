import Container from "@material-ui/core/Container"
import React from "react"
import Layout from "../../components/Layout"
import Title from "../../components/Title"
import PKCEGeneratorForm from "./_components/Form"

const PKCEGenerator = (): JSX.Element => {
  return (
    <Layout title="PKCE Generator">
      <Container>
        <Title>PKCE Generator</Title>
      </Container>
      <PKCEGeneratorForm />
    </Layout>
  )
}

export default PKCEGenerator
