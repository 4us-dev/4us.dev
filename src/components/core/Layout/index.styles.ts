import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(
  createStyles({
    root: {
      minHeight: "100vh",
    },
    container: {
      display: "flex",
      flexDirection: "column",
      minHeight: "92vh",
    },
  })
)

export default useStyles
