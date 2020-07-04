import React, { useState } from "react"
import Layout from "../../components/Layout"
import passwordGenerate from "../../utils/passwordGenerate"

export default () => {
  const [length, setLength] = useState(16)
  const [passwordGenerated, setPasswordGenerated] = useState("")
  const generatePassword = () => {
    setPasswordGenerated(passwordGenerate({ length }))
  }
  return (
    <Layout>
      <div style={{ color: `purple` }}>
        <h1>Password generate!</h1>
        <p>What a world.</p>
        <button onClick={generatePassword}>Generate</button>
        <input
          value={length}
          onChange={({ target }) => setLength(target.value)}
        ></input>
        <textarea rows="4" value={passwordGenerated}></textarea>
      </div>
    </Layout>
  )
}
