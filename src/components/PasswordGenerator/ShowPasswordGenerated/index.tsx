import { Button, FormControl, Grid, Paper, TextField } from "@material-ui/core"
import React from "react"
import copyToClipboard from "../../../../lib/copyToClipboard"
import useStyles from "./index.styles"

interface Props {
  password: string
  onChangePassword: (value: string) => void
}
const ShowPasswordGenerated: React.FC<Props> = ({
  password,
  onChangePassword,
}) => {
  const classes = useStyles()

  const copyPassword = () => copyToClipboard(password)

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChangePassword(e.target.value)
  }
  return (
    <Paper className={classes.root}>
      <Grid container spacing={4}>
        <Grid item xs={10}>
          <FormControl fullWidth>
            <TextField
              value={password}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ "aria-label": "password length to be generated" }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Button variant="contained" color="secondary" onClick={copyPassword}>
            COPY
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default ShowPasswordGenerated
