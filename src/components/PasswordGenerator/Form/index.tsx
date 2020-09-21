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

export interface PasswordGeneratorConfig {
  length: number
  lower?: boolean
  upper?: boolean
  numbers?: boolean
  specialSimple?: boolean
  specialAmbiguous?: boolean
}

interface Props {
  onSubmit: (config: PasswordGeneratorConfig) => void
}
const PasswordGeneratorForm: React.FC<Props> = ({ onSubmit }) => {
  const classes = useStyles()

  const [config, setConfig] = useState<PasswordGeneratorConfig>({
    length: 8,
    lower: true,
    upper: true,
    numbers: true,
    specialSimple: false,
    specialAmbiguous: false,
  })

  const handleChangeInputInteger = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfig({
      ...config,
      [event.target.name]: event.target.value,
    })
  }

  const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfig({
      ...config,
      [event.target.name]: event.target.checked,
    })
  }

  const generatePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit(config)
  }

  return (
    <Paper>
      <form
        onSubmit={generatePassword}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                className={classes.input}
                label="Length"
                name="length"
                type="number"
                value={config.length}
                onChange={handleChangeInputInteger}
                InputLabelProps={{ shrink: true }}
                inputProps={{ "aria-label": "password length to be generated" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Include Lowercase Characters"
                control={
                  <Switch
                    checked={config.lower}
                    onChange={handleChangeSwitch}
                    name="lower"
                    inputProps={{
                      "aria-label":
                        "generate password with lowercase caracters",
                    }}
                  />
                }
              />
              <FormHelperText>( e.g. abcdefgh )</FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Include Uppercase Characters"
                control={
                  <Switch
                    checked={config.upper}
                    onChange={handleChangeSwitch}
                    name="upper"
                    inputProps={{
                      "aria-label":
                        "generate password with uppercase caracters",
                    }}
                  />
                }
              />
              <FormHelperText>( e.g. ABCDEFGH )</FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Include Numbers"
                control={
                  <Switch
                    checked={config.numbers}
                    onChange={handleChangeSwitch}
                    name="numbers"
                    inputProps={{
                      "aria-label": "generate password with numbers",
                    }}
                  />
                }
              />
              <FormHelperText>( e.g. 123456 )</FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Include Simple Characters"
                control={
                  <Switch
                    checked={config.specialSimple}
                    onChange={handleChangeSwitch}
                    name="specialSimple"
                    inputProps={{
                      "aria-label":
                        "generate password with special simple caracters",
                    }}
                  />
                }
              />
              <FormHelperText>{"( e.g. !#$%&*_+=-^~?;:.,| )"}</FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                label="Include Ambiguous Characters"
                control={
                  <Switch
                    checked={config.specialAmbiguous}
                    onChange={handleChangeSwitch}
                    name="specialAmbiguous"
                    inputProps={{
                      "aria-label":
                        "generate password with special ambiguous caracters",
                    }}
                  />
                }
              />
              <FormHelperText>{"( e.g. \"()'`´/>< )"}</FormHelperText>
            </FormGroup>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="secondary" type="submit">
              Generate Password
            </Button>
          </Grid>
        </Grid>
      </form>
    </Paper>
  )
}

export default PasswordGeneratorForm
