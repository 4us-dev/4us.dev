import React, { useState } from "react"
import Layout from "../../components/Layout"
import Title from "../../components/Layout/Title"
import passwordGenerate from "../../utils/passwordGenerate"
import InputField from "../../components/inputs/InputField"
import Button from "../../components/Button"
import styles from "./index.module.css"
import Tooltip from "../../components/Tooltip"
import { useEffect } from "react"

export default () => {
  const [copyMessage, setCopyMessage] = useState("Copy to clipboard")
  const [length, setLength] = useState(8)
  const [lower, setLower] = useState(true)
  const [upper, setUpper] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [specialSimple, setSpecialSimple] = useState(false)
  const [specialAmbiguous, setSpecialAmbiguous] = useState(false)
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

  const onCopy = value => {
    console.log("value", value)
    const el = document.createElement("textarea")
    el.value = value
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    el.setSelectionRange(0, 99999) /*For mobile devices*/
    document.execCommand("copy")
    document.body.removeChild(el)
    setCopyMessage("Copied")
  }

  return (
    <Layout
      title="Password Generator"
      description="Generator a password strong and security to you"
      keywords="password,generate,strong,security"
    >
      <Title>Password generator</Title>
      <form onSubmit={generatePassword}>
        <InputField
          id="lenght"
          label="Password Length:"
          name="lenght"
          type="number"
          value={length}
          onChange={({ target }) => setLength(target.value)}
        />

        <div>
          <InputField
            id="lower"
            name="lower"
            label="Include Lowercase Characters:"
            type="checkbox"
            checked={lower}
            onChange={({ target }) => setLower(target.checked)}
          />
          <small>( e.g. abcdefgh )</small>
        </div>
        <div>
          <InputField
            id="upper"
            name="upper"
            label="Include Uppercase Characters:"
            type="checkbox"
            checked={upper}
            onChange={({ target }) => setUpper(target.checked)}
          />
          <small>( e.g. ABCDEFGH )</small>
        </div>
        <div>
          <InputField
            id="numbers"
            name="numbers"
            label="Include Numbers:"
            type="checkbox"
            checked={numbers}
            onChange={({ target }) => setNumbers(target.checked)}
          />
          <small>( e.g. 123456 )</small>
        </div>
        <div>
          <InputField
            id="specialSimple"
            name="specialSimple"
            label="Include Simple Characters:"
            type="checkbox"
            checked={specialSimple}
            onChange={({ target }) => setSpecialSimple(target.checked)}
          />
          <small>( e.g. !#$%&*_+=-^~?;:.,| )</small>
        </div>
        <div>
          <InputField
            id="specialAmbiguous"
            name="specialAmbiguous"
            label="Include Ambiguous Characters:"
            type="checkbox"
            checked={specialAmbiguous}
            onChange={({ target }) => setSpecialAmbiguous(target.checked)}
          />
          <small>( e.g. "()'`´{[]}\/&gt;&lt; )</small>
        </div>

        <div>
          <Button type="submit">Generate Password</Button>
        </div>
      </form>

      {passwordGenerated && (
        <div className={styles.passwordList}>
          <div className={styles.passwordValueContainer}>
            <div className={styles.passwordValue}>{passwordGenerated}</div>
            <div className={styles.passwordCopyButtonContainer}>
              <Tooltip message={copyMessage}>
                <Button
                  onClick={() => onCopy(passwordGenerated)}
                  onMouseOut={() => setCopyMessage("Copy to clipboard")}
                >
                  Copy
                </Button>
              </Tooltip>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}
