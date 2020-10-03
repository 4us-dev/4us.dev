import { createStyles, makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      "&:hover": {
        textDecoration: "none",
      },
    },
  })
)

export default useStyles
