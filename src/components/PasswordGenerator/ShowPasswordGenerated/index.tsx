import {
  Button,
  Container,
  FormControl,
  Grid,
  Paper,
  TextField,
  Tooltip,
} from "@material-ui/core"
import React, { useState } from "react"
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
  const [copyButtonTitle, setCopyButtonTitle] = useState("COPY")
  const classes = useStyles()

  const copyPassword = () => {
    copyToClipboard(password)
    setCopyButtonTitle("COPIED")
    setTimeout(() => setCopyButtonTitle("COPY"), 1500)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    onChangePassword(e.target.value)
  }
  return (
    <Paper className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={7} sm={10}>
            <FormControl fullWidth>
              <TextField
                value={password}
                onChange={handleChange}
                InputLabelProps={{ shrink: true }}
                inputProps={{ "aria-label": "password length to be generated" }}
              />
            </FormControl>
          </Grid>
          <Grid item xs={5} sm={2}>
            <Tooltip title="Copy to clipboard" placement="top">
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                onClick={copyPassword}
              >
                {copyButtonTitle}
              </Button>
            </Tooltip>
          </Grid>
        </Grid>
      </Container>
    </Paper>
  )
}

export default ShowPasswordGenerated
