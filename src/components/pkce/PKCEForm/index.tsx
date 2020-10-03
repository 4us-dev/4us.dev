import { pkce } from "@4us-dev/crypto"
import { Button, FormControl, Grid, Paper, TextField } from "@material-ui/core"
import React, { useState } from "react"
import copyToClipboard from "../../../../lib/copyToClipboard"
import useStyles from "./index.styles"

const PKCEGeneratorForm: React.FC = () => {
  const classes = useStyles()

  const [codeVerifier, setCodeVerifier] = useState("")
  const [codeVerifierCopyLabel, setCodeVerifierCopyLabel] = useState("COPY")
  const [codeChallenge, setCodeChallenge] = useState("")
  const [codeChallengeCopyLabel, setCodeChallengeCopyLabel] = useState("COPY")

  const copyCodeVerifier = () => {
    copyToClipboard(codeVerifier)
    setCodeVerifierCopyLabel("COPIED")
    setTimeout(() => setCodeVerifierCopyLabel("COPY"), 1500)
  }

  const copyCodeChallenge = () => {
    copyToClipboard(codeChallenge)
    setCodeChallengeCopyLabel("COPIED")
    setTimeout(() => setCodeChallengeCopyLabel("COPY"), 1500)
  }

  const onCodeVerifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeVerifier(event.target.value)
  }

  const generateCodeVerifier = () => {
    setCodeVerifier(pkce.codeVerifierGenerator())
  }
  const generateCodeChallenge = () => {
    if (codeVerifier) {
      setCodeChallenge(pkce.codeChallengeGenerator(codeVerifier))
    }
  }

  return (
    <Paper className={classes.root}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8} sm={10} lg={11}>
          <FormControl fullWidth>
            <TextField
              label="Code Verifier"
              name="codeVerifier"
              value={codeVerifier}
              onChange={onCodeVerifierChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ "aria-label": "password length to be generated" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={2} lg={1}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={copyCodeVerifier}
          >
            {codeVerifierCopyLabel}
          </Button>
        </Grid>
        <Grid item xs={8} sm={10} lg={11}>
          <FormControl fullWidth>
            <TextField
              label="Code Challenge"
              name="codeChallenge"
              value={codeChallenge}
              InputLabelProps={{ shrink: true }}
              inputProps={{ "aria-label": "password length to be generated" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={2} lg={1}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={copyCodeChallenge}
          >
            {codeChallengeCopyLabel}
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            type="button"
            onClick={generateCodeVerifier}
          >
            Generate Code Verifier
          </Button>
        </Grid>

        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            disabled={!codeVerifier}
            onClick={generateCodeChallenge}
          >
            Generate Code Challenge
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default PKCEGeneratorForm
