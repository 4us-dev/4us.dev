import React, { useState } from "react"
import Layout from "../../components/Layout"
import Title from "../../components/Layout/Title"
import passwordGenerate from "../../utils/passwordGenerate"

export default () => {
  const [length, setLength] = useState(16)
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialSimple, setSpecialSimple] = useState(true)
  const [specialAmbiguous, setSpecialAmbiguous] = useState(true)
  const [passwordGenerated, setPasswordGenerated] = useState("")
  const generatePassword = event => {
    event.preventDefault()
    setPasswordGenerated(
      passwordGenerate({
        length,
        upper,
        lower,
        numbers,
        specialSimple,
        specialAmbiguous,
      })
    )
  }
  return (
    <Layout
      title="Password Generator"
      description="Generator a password strong and security to you"
      keywords="password,generate,strong,security"
    >
      <Title>Password generator</Title>
      <form onSubmit={generatePassword}>
        <fieldset>
          <label htmlFor="lenght">
            Password Length:
            <input
              id="lenght"
              name="lenght"
              type="number"
              value={length}
              onChange={({ target }) => setLength(target.value)}
            />
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="lower">
            Include Lowercase Characters:
            <input
              id="lower"
              name="lower"
              type="checkbox"
              checked={lower}
              onChange={({ target }) => setLower(target.checked)}
            />
            <small>( e.g. abcdefgh )</small>
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="upper">
            Include Uppercase Characters:
            <input
              id="upper"
              name="upper"
              type="checkbox"
              checked={upper}
              onChange={({ target }) => setUpper(target.checked)}
            />
            <small>( e.g. ABCDEFGH )</small>
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="numbers">
            Include Numbers:
            <input
              id="numbers"
              name="numbers"
              type="checkbox"
              checked={numbers}
              onChange={({ target }) => setNumbers(target.checked)}
            />
            <small>( e.g. 123456 )</small>
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="specialSimple">
            Include Simple Characters:
            <input
              id="specialSimple"
              name="specialSimple"
              type="checkbox"
              checked={specialSimple}
              onChange={({ target }) => setSpecialSimple(target.checked)}
            />
            <small>( e.g. !#$%&*_+=-^~?;:.,| )</small>
          </label>
        </fieldset>

        <fieldset>
          <label htmlFor="specialAmbiguous">
            Include Ambiguous Characters:
            <input
              id="specialAmbiguous"
              name="specialAmbiguous"
              type="checkbox"
              checked={specialAmbiguous}
              onChange={({ target }) => setSpecialAmbiguous(target.checked)}
            />
            <small>( e.g. "()'`´{[]}\/&gt;&lt; )</small>
          </label>
        </fieldset>

        <div>
          <button type="submit">Generate Password</button>
        </div>
      </form>

      <div>
        <textarea rows="4" value={passwordGenerated}></textarea>
      </div>
    </Layout>
  )
}
