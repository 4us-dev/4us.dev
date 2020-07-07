import React, { useState } from "react"
import Layout from "../../components/Layout"
import passwordGenerate from "../../utils/passwordGenerate"
import Title from "../../components/Layout/Title"

export default () => {
  const [length, setLength] = useState(16)
  const [passwordGenerated, setPasswordGenerated] = useState("")
  const generatePassword = () => {
    setPasswordGenerated(passwordGenerate({ length }))
  }
  return (
    <Layout
      title="Password Generator"
      description="Generator a password strong and security to you"
      keywords="password,generate,strong,security"
    >
      <Title>Password generator</Title>
      <button onClick={generatePassword}>Generate Password</button>
      <input
        value={length}
        onChange={({ target }) => setLength(target.value)}
      ></input>
      <textarea rows="4" value={passwordGenerated}></textarea>
    </Layout>
  )
}
