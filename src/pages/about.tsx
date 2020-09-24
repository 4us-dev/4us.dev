import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import React from "react"
import Copyright from "../components/Copyright"
import Layout from "../components/Layout"
import Link from "../components/Link"

export default function About(): JSX.Element {
  return (
    <Layout title="Sobre">
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/">Go to the main page</Link>
          <Copyright />
        </Box>
      </Container>
    </Layout>
  )
}
