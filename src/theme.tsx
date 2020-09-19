import { createMuiTheme } from "@material-ui/core/styles"
import red from "@material-ui/core/colors/red"

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6200ee",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff7b00",
      contrastText: "#fff",
    },
    error: {
      main: red.A400,
      contrastText: "#fff",
    },
    background: {
      default: "#e9e9e9",
      paper: "#fff",
    },
  },
})

export default theme
