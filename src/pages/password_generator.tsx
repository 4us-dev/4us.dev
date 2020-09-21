import { RandomUtils } from "@4us-dev/utils"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"
import React, { useState } from "react"
import Layout from "../components/Layout"
import PasswordGeneratorForm, {
  PasswordGeneratorConfig,
} from "../components/PasswordGenerator/Form"
import ShowPasswordGenerated from "../components/PasswordGenerator/ShowPasswordGenerated"
import Title from "../components/Title"

const randomUtils = new RandomUtils()

const PasswordGenerator = () => {
  const [passwordActual, setPasswordActual] = useState("")

  const generatePassword = (config: PasswordGeneratorConfig) => {
    const value = randomUtils.nextString({
      length: config.length,
      lower: config.lower,
      upper: config.upper,
      numbers: config.numbers,
      specialSimple: config.specialSimple,
      specialAmbiguous: config.specialAmbiguous,
    })

    setPasswordActual(value)
  }

  return (
    <Layout title="Password Generator">
      <Container>
        <Box my={4}>
          <Title>Password Generator</Title>
          <PasswordGeneratorForm onSubmit={generatePassword} />

          <ShowPasswordGenerated
            password={passwordActual}
            onChangePassword={setPasswordActual}
          />
        </Box>
      </Container>
    </Layout>
  )
}

export default PasswordGenerator
