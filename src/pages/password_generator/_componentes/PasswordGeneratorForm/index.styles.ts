import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(2),
      },
    },
  })
)
export default useStyles
