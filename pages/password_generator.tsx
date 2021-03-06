import { RandomUtils } from "@4us-dev/utils"
import Container from "@material-ui/core/Container"
import React, { useState } from "react"
import Layout from "../src/components/core/Layout"
import Title from "../src/components/core/Title"
import PasswordGeneratorForm, {
  PasswordGeneratorConfig,
} from "../src/components/password_generator/Form"
import ShowPasswordAndCopy from "../src/components/password_generator/ShowPasswordAndCopy"

const randomUtils = new RandomUtils()

const PasswordGeneratorPage = (): JSX.Element => {
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
        <Title>Password Generator</Title>
        <PasswordGeneratorForm onSubmit={generatePassword} />

        <ShowPasswordAndCopy
          password={passwordActual}
          onChangePassword={setPasswordActual}
        />
      </Container>
    </Layout>
  )
}

export default PasswordGeneratorPage
