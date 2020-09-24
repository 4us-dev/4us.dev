import { pkce } from "@4us-dev/crypto"
import {
  Button,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Paper,
  Switch,
  TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import useStyles from "./index.styles"

const PKCEGeneratorForm: React.FC = () => {
  const classes = useStyles()

  const [codeVerifier, setCodeVerifier] = useState("")
  const [codeChallenge, setCodeChallenge] = useState("")

  const onCodeVerifierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCodeVerifier(event.target.value)
  }

  const generateCodeVerifier = () => {
    // setCodeVerifier(pkce.codeVerifierGenerator())
  }
  const generateCodeChallenge = () => {
    // if (codeVerifier) {
    //   setCodeChallenge(pkce.codeChallengeGenerator(codeVerifier))
    // }
  }

  return (
    <Paper className={classes.root}>
      <form onSubmit={generateCodeChallenge} noValidate autoComplete="off">
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="Code Verifier"
                name="codeVerifier"
                type="number"
                value={codeVerifier}
                error={true}
                onChange={onCodeVerifierChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ "aria-label": "password length to be generated" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12} md={6}>
            <FormControl fullWidth>
              <TextField
                label="Code Challenge"
                name="codeChallenge"
                type="number"
                value={codeChallenge}
                InputLabelProps={{ shrink: true }}
                inputProps={{ "aria-label": "password length to be generated" }}
              />
            </FormControl>
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
              type="submit"
            >
              Generate Code Challenge
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default PKCEGeneratorForm
