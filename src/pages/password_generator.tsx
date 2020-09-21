import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Copyright from "../components/Copyright"
import Layout from "../components/Layout"
import Link from "../components/Link"

const PasswordGenerator = () => {
  return (
    <Layout title="Password Generator">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Password Generator
          </Typography>
          <Link href="/">Go to the main page</Link>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  )
}

export default PasswordGenerator
