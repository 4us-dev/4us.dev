import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1),
        // width: "100%",
      },
    },
    input: {
      marginRight: theme.spacing(6),
    },
  })
)
export default useStyles
